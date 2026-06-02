import MMaintenance from "../../db/maintenance.schema";

export async function createMaintenance(maintenance) {
    const newMaintenance = await new MMaintenance(maintenance);
    return await newMaintenance.save();
}