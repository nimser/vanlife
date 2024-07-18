import { NavLink, Link, useNavigate } from "react-router-dom";
import avatarIcon from "../assets/images/avatar-icon.png";
import logoutIcon from "../assets/images/sign-out.svg";
import { logout } from "../api";

export default function Header({ isLoggedIn }) {
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      await logout();
      navigate(0);
    } catch (err) {
      console.error(err);
    }
  };

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
        {isLoggedIn && (
          <NavLink
            to="/host"
            className={({ isActive }) => (isActive ? "active" : null)}
          >
            Host
          </NavLink>
        )}
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
        {isLoggedIn ? (
          <button type="button" onClick={handleLogOut} className="login-link">
            <img src={logoutIcon} alt="logout" width="25" />
          </button>
        ) : (
          <Link to="/login" className="login-link">
            <img src={avatarIcon} alt="login" />
          </Link>
        )}
      </nav>
    </header>
  );
}
