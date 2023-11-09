import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/TitleLogo.jpeg'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <div id='footer'>
      <div  className="container px-4">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3  border-top border-success">
          <p className="col-md-4 mb-0 ">© 2023 Bookstore, Inc</p>

          {/* diplay the logo here */}
          <img id='footer-logo' className='img-fluid' src={logo} alt='logo'/>

          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item"><Link to="/" className="nav-link px-2 text-light">Home</Link></li>
            <li className="nav-item"><Link to="/about" className="nav-link px-2 text-light">About</Link></li>
            <li className="nav-item"><Link to="/contact" className="nav-link px-2 text-light">Contact us</Link></li>
            <li className="nav-item"><Link to="/faqs" className="nav-link px-2 text-light">FAQs</Link></li>
            
          </ul>
        </footer>
      </div>
    </div>
  )
}
