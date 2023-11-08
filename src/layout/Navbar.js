import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../components/Search'
import '../styles/Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary ">
      <div className="container-fluid">
        <div className=" collapse navbar-collapse" id="navbarSupportedContent">
         <h2 className="navbar-brand me-auto ms-5" >Navbar</h2>
          <ul className="navbar-nav mx-5 mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/addbook">AddBook</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/contact">Contact us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/faqs">FAQs</Link>
            </li>
          </ul>
          
          
        </div>
      </div>
    </nav>
  )
}
