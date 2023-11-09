import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/TitleLogo.jpeg'
import '../styles/Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="container-fluid">
        <div className=" collapse navbar-collapse" id="navbarSupportedContent">
          <ul  className="navbar-nav mx-5 mb-2 mb-md-0">
           
              <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to="/addbook">AddBook</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active " aria-current="page" to="/transactions">Transactions</Link>
              </li>
          </ul>
          <div className='d-flex navbar-brand mx-auto' id='logo'>
            <img src={logo} alt='logo'/>
            <h5 className="" >BookStore</h5>
          </div>
        
          <ul className="navbar-nav mx-5 mb-2 mb-md-0">
           <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
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
