import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    id: { type: Number },
    title: { type: String, required: true },
    description: { type: String, required: true }
}, { timestamps: true });

const taskModel = mongoose.model('task', taskSchema);
export default taskModel;