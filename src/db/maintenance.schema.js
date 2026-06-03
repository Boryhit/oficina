import mongoose from "mongoose";

const maintenanceSchema = new mongoose.Schema({
    workshop: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Workshop"
    },
    vehicle: {
        type: mongoose.Schema.Types.ObjectId,
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