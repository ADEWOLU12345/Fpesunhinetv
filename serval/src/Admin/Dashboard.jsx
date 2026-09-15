function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-blue-600 text-white p-6 rounded-lg">
          <h2 className="text-2xl font-bold">Total News</h2>
          <p className="text-4xl mt-4">3</p>
        </div>

        <div className="bg-green-600 text-white p-6 rounded-lg">
          <h2 className="text-2xl font-bold">Categories</h2>
          <p className="text-4xl mt-4">5</p>
        </div>

        <div className="bg-red-600 text-white p-6 rounded-lg">
          <h2 className="text-2xl font-bold">Visitors</h2>
          <p className="text-4xl mt-4">0</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;