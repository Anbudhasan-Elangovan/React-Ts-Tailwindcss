export default function Header() {
  return (
    <header className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">React TS</h1>
      <nav>
        <ul className="flex space-x-4">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">About</li>
          <li className="hover:underline cursor-pointer">Contact</li>
        </ul>
      </nav>
    </header>
  );
}
