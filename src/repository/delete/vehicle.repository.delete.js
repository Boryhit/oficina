import MVehicle from "../../db/vehicle.schema.js";

export async function deleteVehicle(id) {
    const deleteVehicle = await MVehicle.findByIdAndDelete(id);
    if (!deleteVehicle) {
        throw new Error("Veículo não encontrado!");
    }
    return { message: "Veículo excluído com sucesso!" };
}