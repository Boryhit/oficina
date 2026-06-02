import mongoose, { model } from "mongoose";

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
    maintenances: {
        type: [String],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const MVehicle = mongoose.model("Vehicle", vehicleSchema);

export default MVehicle;