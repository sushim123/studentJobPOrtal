import { useState } from "react";
import { useStudentStore } from "../store/studentStore";
import { useNavigate } from "react-router-dom";

const AddApplication = () => {
  const [form, setForm] = useState({
    company: "",
    role: "",
    status: "Applied",
    date: "",
    link: "",
  });

  const addApplication = useStudentStore((state) => state.addApplication);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addApplication(form);
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-xl space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Add Job Application
        </h2>

        {/* Company, Role, Link Inputs */}
        {["company", "role", "link"].map((field) => (
          <div key={field}>
            <label className="block text-gray-700 font-medium mb-1 capitalize">
              {field}
            </label>
            <input
              type="text"
              name={field}
              placeholder={`Enter ${field}`}
              value={form[field]}
              onChange={(e) => setForm({ ...form, [field]: e.target.value })}
              required
              className="w-full p-3 border border-gray-300 text-neutral-900 placeholder:text-black rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
          </div>
        ))}

        {/* Date Picker */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Date</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            required
            className="w-full p-3 placeholder:text-black text-neutral-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
          />
        </div>

        {/* Status Dropdown */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Status</label>
          <select
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
            className="w-full p-3 border text-neutral-900 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
          >
            <option>Applied</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3 pt-4">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition"
          >
            Submit Application
          </button>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="bg-gray-300 hover:bg-gray-400  text-white py-3 rounded-lg font-medium transition"
          >
            ← Back to Home
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddApplication;
