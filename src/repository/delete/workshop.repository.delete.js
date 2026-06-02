import MWorkshop from "../../db/workshop.schema";

export async function deleteWorkshop(id) {
    const deleteWorkshop = await MWorkshop.findByIdAndDelete(id);
    if (!deleteWorkshop) {
        throw new Error("Oficina não encontrada!");
    }
    return { message: "Oficina excluída com sucesso!" };
}