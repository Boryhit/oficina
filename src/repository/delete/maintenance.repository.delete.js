import MMaintenance from "../../db/maintenance.schema.js";

export async function deleteMaintenance(id) {
    const deleteMaintenance = await MMaintenance.findByIdAndDelete(id);
    if (!deleteMaintenance) {
        throw new Error("Manutenção não encontrada!");
    }
    return { message: "Manutenção excluída com sucesso!" };
}