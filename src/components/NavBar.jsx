import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand">
          Muthu
        </Link>

        <nav className="navbar-links">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/internship">
            Internships
          </NavLink>
          <NavLink to="/projects">
            Projects
          </NavLink>
          <NavLink to="/activities">
            Activities
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
