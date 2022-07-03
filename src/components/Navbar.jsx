import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <ul className="nav nav-pills my-2">
      <li className="nav-item">
        <Link className="nav-link active" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item dropdown">
        <Link
          className="nav-link dropdown-toggle"
          data-bs-toggle="dropdown"
          to="/"
          role="button"
          aria-expanded="false"
        >
          Dropdown
        </Link>
        <ul className="dropdown-menu">
          <li>
            <Link className="dropdown-item" to="/posts">
              Content
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <Link className="dropdown-item" to="/login">
              Login
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/register">
              Register
            </Link>
          </li>
        </ul>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/posts">
          Content
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/register">
          Register
        </Link>
      </li>
      {/* <li className="nav-item">
        <Link className="nav-link disabled" to="#">Disabled</Link>
      </li> */}
    </ul>
  );
}
