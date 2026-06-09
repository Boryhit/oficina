import MVehicle from "../../db/vehicle.schema.js";
import { getVehicleByPlateService } from "../../service/vehicle.service.js";

export async function createVehicle(vehicle) {
    const plates = await getVehicleByPlateService(vehicle.plate);
    if (plates) {
        throw new Error("Placa já cadastrada!");
    }
    const newVehicle = await new MVehicle(vehicle);
    return await newVehicle.save();
}