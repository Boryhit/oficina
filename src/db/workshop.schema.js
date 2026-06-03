import mongoose from "mongoose";

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
    vehicles: {
        type: [String],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const MWorkshop = mongoose.model("Workshop", workshopSchema);

export default MWorkshop;