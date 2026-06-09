import MMaintenance from "../../db/maintenance.schema.js";
import { getWorkshopByIdService } from "../../service/workshop.service.js";
import { getVehicleByIdService } from "../../service/vehicle.service.js";

export async function createMaintenance(maintenance) {
    const workshop = await getWorkshopByIdService(maintenance.workshopId);
    if (!workshop) {
        throw new Error("Oficina não encontrada");
    }
    const vehicle = await getVehicleByIdService(maintenance.vehicleId);
    if (!vehicle) {
        throw new Error("Veículo não encontrado");
    }
    const newMaintenance = await new MMaintenance(maintenance);
    return await newMaintenance.save();
}