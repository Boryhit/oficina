import MVehicle from "../../db/vehicle.schema.js";

export async function createVehicle(vehicle) {
    const newVehicle = await new MVehicle(vehicle);
    return await newVehicle.save();
}