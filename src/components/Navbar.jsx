import {useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.clear()
    alert('logout successful')
    navigate('/')
    window.location.reload()
  }

  let token = localStorage.getItem('token')

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
          {token && (<li>
            <Link className="dropdown-item" to="/content">
              Content
            </Link>
          </li>)}
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
      {token && (<li className="nav-item">
        <Link className="nav-link" to="/content">
          Content
        </Link>
      </li>)}
      {!token && (<li className="nav-item">
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </li>)}
      {!token && (<li className="nav-item">
        <Link className="nav-link" to="/register">
          Register
        </Link>
      </li>)}
      {token && (<li className="nav-item">
        <Link className="nav-link" to="#" onClick={logout}>
          Logout
        </Link>
      </li>)}
      {/* <li className="nav-item">
        <Link className="nav-link disabled" to="#">Disabled</Link>
      </li> */}
    </ul>
  );
}
