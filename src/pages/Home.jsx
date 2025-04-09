import { useEffect } from "react";
import { useStudentStore } from "../store/studentStore";
import ApplicationCard from "../components/ApplicationCard";

const Home = () => {
  const { applications, getAllApplications, loading } = useStudentStore();

  useEffect(() => {
    getAllApplications();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">All Job Applications</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {applications.map((app) => (
            <ApplicationCard key={app._id} app={app} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
