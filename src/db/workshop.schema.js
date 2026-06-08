import mongoose from "mongoose";
import { Types } from "mongoose";

const workshopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    },
    specialities: {
        type: [String],
        required: true
    },
    vehiclesId: {
        type: [Types.ObjectId],
        required: true,
        ref: "Vehicle"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const MWorkshop = mongoose.model("Workshop", workshopSchema);

export default MWorkshop;