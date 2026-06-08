import MWorkshop from "../../db/workshop.schema.js";
import { updateVehicle } from "../update/vehicle.repository.update.js";

export async function createWorkshop(workshop) {
    vehiclesId = updateVehicle(workshop.vehicles);
    const newWorkshop = await new MWorkshop({...workshop, vehiclesId});
    return await newWorkshop.save();
}