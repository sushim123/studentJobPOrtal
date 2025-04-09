import Job from "../models/job.schema.js";

export const addNewApplication = async (req, res) => {
  try {
    const { company, role, status, date, link } = req.body;

    const newJob = new Job({ company, role, status, date, link });
    await newJob.save();

    res.status(201).json(newJob);
  } catch (error) {
    console.error("Error in addNewApplication:", error);
    res.status(500).json({
      error: "Failed to add job application",
      message: error.message,
    });
  }
};

export const allApplication = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ date: -1 });
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch job applications" });
  }
};

export const updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updatedJob = await Job.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    res.status(200).json(updatedJob);
  } catch (error) {
    res.status(500).json({ error: "Failed to update status" });
  }
};

export const deleteApplication = async (req, res) => {
  try {
    const { id } = req.params;
    await Job.findByIdAndDelete(id);
    res.status(200).json({ message: "Job application deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete application" });
  }
};
