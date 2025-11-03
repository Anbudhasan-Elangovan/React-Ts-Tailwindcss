import { NavLink } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { selectAuth, logout } from "../../features/auth/authSlice";
import { useNavigate } from "react-router";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <header className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">React TS</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `hover:underline cursor-pointer" ${isActive ? "underline" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:underline cursor-pointer" ${isActive ? "underline" : ""}`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:underline cursor-pointer" ${isActive ? "underline" : ""}`
              }
            >
              Contact
            </NavLink>
          </li>
          <li className="hover:underline cursor-pointer" onClick={handleLogout}>
            Logout
          </li>
        </ul>
      </nav>
    </header>
  );
}
