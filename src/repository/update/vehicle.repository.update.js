import MVehicle from "../../db/vehicle.schema.js";

export async function updateVehicle(id, make, model, year, owner, maintenances) {
    const updatedVehicle = await MVehicle.findByIdAndUpdate(
        id, {make, model, year, owner, maintenances},
        {new: true, runValidators: true}
    );
    if (!updatedVehicle) {
        throw new Error("Veículo não encontrado");
    }
    return updatedVehicle;
}