import AdminSidebar from "../components/AdminSidebar";
import AdminHeader from "../components/AdminHeader";
import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  const stats = [
    { title: "News", number: 25 },
    { title: "Scholarships", number: 12 },
    { title: "Jobs", number: 8 },
    { title: "Users", number: 150 },
  ];
  return (
    <div className="flex min-h-screen bg-gray-100">

      <AdminSidebar />

      <div className="flex-1">

        <AdminHeader />

        <div className="p-8">

          <h1 className="text-4xl font-bold mb-8">
            Dashboard
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((item) => (
              <DashboardCard
                key={item.title}
                title={item.title}
                number={item.number}
              />
            ))}
          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;