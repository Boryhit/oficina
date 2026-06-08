import mongoose from "mongoose";
import { Types } from "mongoose";

const vehicleSchema = new mongoose.Schema({
    plate: {
        type: String,
        required: true,
        unique: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    maintenancesId: {
        type: [Types.ObjectId],
        required: false,
        ref: "Maintenance"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const MVehicle = mongoose.model("Vehicle", vehicleSchema);

export default MVehicle;