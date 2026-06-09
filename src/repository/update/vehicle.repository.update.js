import MVehicle from "../../db/vehicle.schema.js";
import { getMaintenanceByIdService } from "../../service/maintenance.service.js";

export async function updateVehicle(id, plate, model, year, owner, maintenancesId) {
    const maintenances = await getMaintenanceByIdService(maintenancesId);
    if (maintenances){
            const updatedVehicle = await MVehicle.findByIdAndUpdate(
            id, {plate, model, year, owner, maintenancesId},
            {new: true, runValidators: true}
        );
        if (!updatedVehicle) {
            throw new Error("Veículo não encontrado");
        }
        return updatedVehicle;
    } else {
        throw new Error("Manutenção não encontrada");
    }
}