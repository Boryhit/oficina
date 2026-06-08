import mongoose from "mongoose";
import { Types } from "mongoose";

const maintenanceSchema = new mongoose.Schema({
    workshopId: {
        type: Types.ObjectId,
        required: true,
        ref: "Workshop"
    },
    vehicleId: {
        type: Types.ObjectId,
        required: true,
        ref: "Vehicle"
    },
    services: {
        type: [String],
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    totalCost: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const MMaintenance = mongoose.model("Maintenance", maintenanceSchema);

export default MMaintenance;    