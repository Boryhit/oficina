import MMaintenance from "../../db/maintenance.schema.js";

export async function updateMaintenance(id, workshopId, vehicleId, services, date, totalCost) {
    const updatedMaintenance = await MMaintenance.findByIdAndUpdate(
        id, {workshopId, vehicleId, services, date, totalCost},
        {new: true, runValidators: true}
    );
    if (!updatedMaintenance) {
        throw new Error("Manutenção não encontrada");
    }
    return updatedMaintenance;
}