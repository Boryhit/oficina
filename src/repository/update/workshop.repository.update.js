import MWorkshop from "../../db/workshop.schema.js";
import { getVehicleByIdService } from "../../service/vehicle.service.js";

export async function updateWorkshop(id, name, address, specialities, vehiclesId) {
    const vehicle = await getVehicleByIdService(vehiclesId);
    if (vehicle) {
            const updatedWorkshop = await MWorkshop.findByIdAndUpdate(
            id, {name, address, specialities, vehiclesId},
            {new: true, runValidators: true}
        );
        if (!updatedWorkshop) {
            throw new Error("Oficina não encontrada");
        }
        return updatedWorkshop;
    } else {
        throw new Error("Veículo não encontrado");
    }
}