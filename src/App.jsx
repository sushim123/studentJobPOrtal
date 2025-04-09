import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddApplication from "./pages/AddApplication";

function App() {
  return (
    <Router>
      <div className="p-4">
        {/* Navigation */}
        <div className="mb-4">
          <Link
            to="/add"
            className="inline-block bg-blue-300 text-white px-4 py-2 rounded hover:bg-blue-300"
          >
            ➕ Add New Job
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddApplication />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
