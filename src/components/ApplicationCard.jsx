import { useStudentStore } from "../store/studentStore";
import StatusDropdown from "./StatusDropdown";

const ApplicationCard = ({ app }) => {
  const deleteApplication = useStudentStore((s) => s.deleteApplication);

  return (
    <div className="border rounded p-4 shadow">
      <h3 className="font-bold text-lg">{app.company}</h3>
      <p>{app.role}</p>
      <p>Status: <strong>{app.status}</strong></p>
      <p >Date: {new Date(app.date).toLocaleDateString()}</p>
      <a href={app.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
        Job Link
      </a>
      <div className="flex justify-between items-center mt-4">
        <StatusDropdown id={app._id} currentStatus={app.status} />
        <button onClick={() => deleteApplication(app._id)} className="text-red-500 hover:underline">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ApplicationCard;
