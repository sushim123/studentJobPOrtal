import { useStudentStore } from "../store/studentStore";

const StatusDropdown = ({ id, currentStatus }) => {
  const updateStatus = useStudentStore((s) => s.updateStatus);

  const handleChange = (e) => {
    updateStatus(id, e.target.value);
  };

  return (
    <select value={currentStatus} onChange={handleChange} className="border p-1 rounded">
      <option>Applied</option>
      <option>Interview</option>
      <option>Offer</option>
      <option>Rejected</option>
    </select>
  );
};

export default StatusDropdown;
