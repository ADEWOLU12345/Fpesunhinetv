import { NavLink } from "react-router-dom";

function AdminSidebar() {
  return (
    <aside className="w-72 bg-blue-900 text-white min-h-screen p-6">

      <h1 className="text-3xl font-bold mb-10">
        FPE Sunshine TV
      </h1>

      <nav className="space-y-4">

        <NavLink to="/dashboard" className="block hover:text-yellow-400">
          Dashboard
        </NavLink>

        <NavLink to="/admin/news" className="block hover:text-yellow-400">
          News
        </NavLink>

        <NavLink to="/admin/add-news" className="block hover:text-yellow-400">
          Add News
        </NavLink>

        <NavLink to="/admin/scholarships" className="block hover:text-yellow-400">
          Scholarships
        </NavLink>

        <NavLink to="/admin/jobs" className="block hover:text-yellow-400">
          Jobs
        </NavLink>

        <NavLink to="/admin/gallery" className="block hover:text-yellow-400">
          Gallery
        </NavLink>

        <NavLink to="/admin/live-tv" className="block hover:text-yellow-400">
          Live TV
        </NavLink>

        <NavLink to="/logout" className="block hover:text-red-400">
          Logout
        </NavLink>

      </nav>

    </aside>
  );
}

export default AdminSidebar;