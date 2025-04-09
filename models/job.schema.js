import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  company: { type: String },
  role: { type: String },
  status: {
    type: String,
    enum: ["Applied", "Interview", "Offer", "Rejected"],
    default: "Applied",
  },
  date: { type: Date },
  link: { type: String },
});

const Job = mongoose.model("Job", jobSchema);
export default Job;
