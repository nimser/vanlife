import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/">#vanlife</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
}
