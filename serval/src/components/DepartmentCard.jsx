function DepartmentCard({ department }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">

      <img
        src={department.image}
        alt={department.name}
        className="w-full h-100 object-cover"
      />

      <div className="p-6">

        <h2 className="text-2xl font-bold">
          {department.name}
        </h2>

        <p className="text-gray-600 mt-2">
          {department.dept}
        </p>

        <button className="mt-5 w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800">
          View Faculties
        </button>

      </div>
        
    </div>
    
  );
}

export default DepartmentCard;