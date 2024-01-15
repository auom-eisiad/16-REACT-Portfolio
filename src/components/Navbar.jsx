import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-bar">
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === "/About" ? "nav-link active" : "nav-link"}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Project"
          className={currentPage === "/Project" ? "nav-link active" : "nav-link"}
        >
          Project
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={
            currentPage === "/Contact" ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          className={
            currentPage === "/Resume" ? "nav-link active" : "nav-link"
          }
        >
          Resume
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
