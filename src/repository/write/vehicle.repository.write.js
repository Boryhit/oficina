import MVehicle from "../../db/vehicle.schema.js";

export async function createVehicle(vehicle) {
    maintenancesId = updateMaintenance(vehicle.maintenances);
    const newVehicle = await new MVehicle({...vehicle, maintenancesId});
    return await newVehicle.save();
}