import MVehicles from "../../db/vehicle.schema.js";

export async function getAllVehicles() {
    const vehicles = await MVehicles.find({});
    return vehicles;
}

export async function getVehicleById(id) {
    const vehicle = await MVehicles.findById(id);
    if (!vehicle) {
        throw new Error("Veículo não encontrado");
    }
    return vehicle;
}

export async function getMaintenanceByVehicle(maintenanceId) {
    const maintenance = await MMaintenance.find({vehicle: maintenanceId});
    return maintenance;
}

export async function getVehicleByPlate(plate) {
    const vehicle = await MVehicles.findOne({plate: plate});
    return vehicle;
}