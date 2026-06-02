import MWorkshop from "../../db/workshop.schema";

export async function getAllWorkshops() {
    const workshops = await MWorkshop.find({});
    return workshops;
}

export async function getWorkshopById(id) {
    const workshop = await MWorkshop.findById(id);
    if (!workshop) {
        throw new Error("Oficina não encontrada");
    }
    return workshop;
}

export async function getVehicleByWorkshop(vehicleId) {
    const workshops = await MWorkshop.find({vehicle: vehicleId});
    return workshops;
}