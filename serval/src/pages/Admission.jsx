import { Link } from "react-router-dom";
function Admission() {
  return (
    <div className="max-w-7xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold">Admission</h1>
      <Link to="/admission">View Admission Information</Link>
    </div>
  );
}

export default Admission;