import React from 'react'
import '../styles/Contacts.css'

export default function Contacts() {
  return (
<div className='bg-dark'>
    <div id='contacts'>
      {/* <!--Section: Contact v.2--> */}
      <section className="mb-4 bg px-5">

          {/* <!--Section heading--> */}
          <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
          {/* <!--Section description--> */}
          <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
              a matter of hours to help you.</p>

          <div className="row">

              {/* <!--Grid column--> */}
              <div className="col-md-9 mb-md-0 mb-5">
                  <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                      {/* <!--Grid row--> */}
                      <div className="row">

                          {/* <!--Grid column--> */}
                          <div className="col-md-6">
                              <div className="md-form mb-0">
                                  <input type="text" id="name" name="name" className="form-control"/>
                                  <label for="name" className="">Your name</label>
                              </div>
                          </div>
                          {/* <!--Grid column--> */}

                          {/* <!--Grid column--> */}
                          <div className="col-md-6">
                              <div className="md-form mb-0">
                                  <input type="text" id="email" name="email" className="form-control"/>
                                  <label for="email" className="">Your email</label>
                              </div>
                          </div>
                          {/* <!--Grid column--> */}

                      </div>
                      {/* <!--Grid row--> */}

                      {/* <!--Grid row--> */}
                      <div className="row">
                          <div className="col-md-12">
                              <div className="md-form mb-0">
                                  <input type="text" id="subject" name="subject" className="form-control"/>
                                  <label for="subject" className="">Subject</label>
                              </div>
                          </div>
                      </div>
                      {/* <!--Grid row--> */}

                      {/* <!--Grid row--> */}
                      <div className="row">

                          {/* <!--Grid column--> */}
                          <div className="col-md-12">

                              <div className="md-form">
                                  <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                                  <label for="message">Your message</label>
                              </div>

                          </div>
                      </div>
                      {/* <!--Grid row--> */}

                  </form>

                  <div className="text-center text-md-left">
                      <button className="btn btn-primary">Send</button>
                  </div>
                  <div className="status"></div>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div className="col-md-3 text-center">
                  <ul className="list-unstyled mb-0">
                      <li className='d-flex'>
                          <i className="fa fa-map-marker" aria-hidden="true"></i>
                          <p>San Francisco, CA 94126, USA</p>
                      </li>

                      <li >
                          <i className="fa fa-phone " aria-hidden="true"></i>
                          <p>+ 01 234 567 89</p>
                      </li>

                      <li className='d-flex'>
                          <i className="fa fa-envelope" aria-hidden="true"></i>
                          <p>contact@byronbookstore.com</p>
                      </li>
                  </ul>
              </div>
              {/* <!--Grid column--> */}

          </div>

      </section>

    </div>
  </div>  
  )

}
