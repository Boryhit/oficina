import MVehicle from "../../db/vehicle.schema";

export async function updateVehicle(id, make, model, year, licensePlate, owner) {
    const updatedVehicle = await MVehicle.findByIdAndUpdate(
        id, {make, model, year, licensePlate, owner},
        {new: true, runValidators: true}
    );
    if (!updatedVehicle) {
        throw new Error("Veículo não encontrado");
    }
    return updatedVehicle;
}