import DepartmentCard from "../components/DepartmentCard";
import departments from "../data/departmentsData";

function Departments() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6">

      <h1 className="text-5xl font-bold text-center text-gray-800 color-slate-800">
        Academic Faculties
      </h1>

      <p className="text-center text-gray-600 mt-4 mb-12 font-medium">
        Explore the academic Faculties at Federal Polytechnic Ede.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {departments.map((department) => (
          <DepartmentCard
            key={department.id}
            department={department}
          />
        ))}
      </div>

    </section>
  );
}

export default Departments;