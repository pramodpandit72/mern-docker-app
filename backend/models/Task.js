import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  text: String
});

export default mongoose.model("Task", taskSchema);