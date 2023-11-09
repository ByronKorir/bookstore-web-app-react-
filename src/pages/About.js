import React from 'react'
import '../styles/About.css'

export default function About() {
  return (
    <div className='bg-dark'>
      <h3 id='title' className='text-center'>About us</h3>
      <div id='about' className='container-fluid'>
        <p>Welcome to our online bookstore! We are passionate about books and believe in the power of reading to inspire, educate, and entertain. Our goal is to provide a wide variety of books to our customers, from bestsellers to niche titles, and make them easily accessible through our website.</p>

        <p>Our team consists of avid readers who are dedicated to curating a diverse selection of books that cater to different interests and tastes. We believe that everyone should have access to books that can help them grow, learn, and escape into new worlds.</p>

        <p>In addition to our vast collection of books, we also offer exceptional customer service. Our team is always ready to assist you with any questions or concerns you may have. We strive to provide a seamless shopping experience and ensure that your orders are delivered promptly and securely.</p>
      </div>
    </div>
  )
}
