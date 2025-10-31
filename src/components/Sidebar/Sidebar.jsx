export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-gray-100 flex flex-col p-4 space-y-4">
      <div className="text-lg font-semibold mb-2">Menu</div>
      <nav className="flex flex-col space-y-2">
        <a href="#" className="hover:bg-gray-700 rounded px-3 py-2">
          Dashboard
        </a>
        <a href="#" className="hover:bg-gray-700 rounded px-3 py-2">
          Users
        </a>
        <a href="#" className="hover:bg-gray-700 rounded px-3 py-2">
          Settings
        </a>
      </nav>
    </aside>
  );
}
