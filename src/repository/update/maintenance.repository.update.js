import MMaintenance from "../../db/maintenance.schema.js";

export async function updateMaintenance(id, description, date, cost, vehicle) {
    const updatedMaintenance = await MMaintenance.findByIdAndUpdate(
        id, {description, date, cost, vehicle},
        {new: true, runValidators: true}
    );
    if (!updatedMaintenance) {
        throw new Error("Manutenção não encontrada");
    }
    return updatedMaintenance;
}