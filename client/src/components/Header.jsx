import { NavLink, Link } from "react-router-dom";
import avatarIcon from "../assets/images/avatar-icon.png";

export default function Header({ loggedIn }) {
  return (
    <header>
      <nav>
        <NavLink
          to="/"
          id="logo"
          className={({ isActive }) => (isActive ? "active" : null)}
        >
          #vanlife
        </NavLink>
        <NavLink
          to="/host"
          className={({ isActive }) => (isActive ? "active" : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="/vans"
          className={({ isActive }) => (isActive ? "active" : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : null)}
        >
          About
        </NavLink>
        {loggedIn ? (
          <Link to="/logout" className="login-link">
            Logout
          </Link>
        ) : (
          <Link to="/login" className="login-link">
            <img src={avatarIcon} alt="login" />
          </Link>
        )}
      </nav>
    </header>
  );
}
