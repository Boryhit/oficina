import MWorkshop from "../../db/workshop.schema.js";

export async function createWorkshop(workshop) {
    const newWorkshop = await new MWorkshop(workshop);
    return await newWorkshop.save();
}