import MMaintenance from "../../db/maintenance.schema.js";

export async function getAllMaintenances() {
    const maintenances = await MMaintenance.find({});
    return maintenances;
}

export async function getMaintenanceById(id) {
    const maintenance = await MMaintenance.findById(id);
    if (!maintenance) {
        throw new Error("Manutenção não encontrada");
    }
    return maintenance;
}

export async function getMaintenanceByWorkshop(workshopId) {
    const workshops = await MWorkshop.find({maintenance: workshopId});
    return workshops;
}

export async function getMaintenanceByVehicle(maintenanceId) {
    const maintenance = await MMaintenance.find({vehicle: maintenanceId});
    return maintenance;
}