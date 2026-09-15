import { Link } from "react-router-dom";
function Entertainment() {
  return (
    <div className="max-w-7xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold">Entertainment</h1>
      <Link to="/entertainment">View Entertainment</Link>
    </div>
  );
}

export default Entertainment;