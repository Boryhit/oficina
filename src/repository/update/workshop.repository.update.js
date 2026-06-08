import MWorkshop from "../../db/workshop.schema.js";

export async function updateWorkshop(id, name, address, specialities, vehicles) {
    const updatedWorkshop = await MWorkshop.findByIdAndUpdate(
        id, {name, address, specialities, vehicles},
        {new: true, runValidators: true}
    );
    if (!updatedWorkshop) {
        throw new Error("Oficina não encontrada");
    }
    return updatedWorkshop;
}