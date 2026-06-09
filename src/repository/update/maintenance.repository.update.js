import MMaintenance from "../../db/maintenance.schema.js";
import { getWorkshopByIdService } from "../../service/workshop.service.js";
import { getVehicleByIdService } from "../../service/vehicle.service.js";

export async function updateMaintenance(id, workshopId, vehicleId, services, date, totalCost) {
    const workshop = await getWorkshopByIdService(workshopId);
    if (!workshop) {
        throw new Error("Oficina não encontrada");
    }
    const vehicle = await getVehicleByIdService(vehicleId);
    if (!vehicle) {
        throw new Error("Veículo não encontrado");
    }
    const updatedMaintenance = await MMaintenance.findByIdAndUpdate(
        id, {workshopId, vehicleId, services, date, totalCost},
        {new: true, runValidators: true}
    );
    if (!updatedMaintenance) {
        throw new Error("Manutenção não encontrada");
    }
    return updatedMaintenance;
}