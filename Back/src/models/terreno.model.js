import mongoose from "mongoose";

const terrenoSchema = new mongoose.Schema({
    sku: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    descripcion: {
        type: String,
    }
}, {
    timestamps: true
});

export default mongoose.model("Terreno", terrenoSchema);
