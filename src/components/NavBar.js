import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  let location = useLocation();
  const handleLogout=()=>{
    localStorage.removeItem('token');
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">iNotebook</Link>
    
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/about"? "active" : ""}`}  to="/about">About</Link>
        </li>
      </ul>
      {!localStorage.getItem('token') ? <Link className="box mx-1" to="/login">Login/Signup</Link> : <Link className="box mx-1" to="/" onClick={handleLogout}>Logout</Link>}
    
  </div>
</nav>
  )
}

export default NavBar
