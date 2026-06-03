import MWorkshop from "../../db/workshop.schema.js";

export async function updateWorkshop(id, name, address, specialty, vehicles) {
    const updatedWorkshop = await MWorkshop.findByIdAndUpdate(
        id, {name, address, specialty, vehicles},
        {new: true, runValidators: true}
    );
    if (!updatedWorkshop) {
        throw new Error("Oficina não encontrada");
    }
    return updatedWorkshop;
}