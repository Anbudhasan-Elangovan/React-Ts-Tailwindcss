import { NavLink } from "react-router";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-gray-100 flex flex-col p-4 space-y-4">
      <div className="text-lg font-semibold mb-2">Menu</div>
      <nav className="flex flex-col space-y-2">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `rounded px-3 py-2 hover:bg-gray-700 ${
              isActive ? "bg-gray-700 font-medium" : ""
            }`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/use-state"
          className={({ isActive }) =>
            `rounded px-3 py-2 hover:bg-gray-700 ${
              isActive ? "bg-gray-700 font-medium" : ""
            }`
          }
        >
          useState
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) =>
            `rounded px-3 py-2 hover:bg-gray-700 ${
              isActive ? "bg-gray-700 font-medium" : ""
            }`
          }
        >
          Users
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `rounded px-3 py-2 hover:bg-gray-700 ${
              isActive ? "bg-gray-700 font-medium" : ""
            }`
          }
        >
          Settings
        </NavLink>
      </nav>
    </aside>
  );
}
