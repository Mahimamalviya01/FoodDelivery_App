import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import {FaFacebookF , FaTwitter,FaGoogle,FaInstagram,FaLinkedin,FaGithub,FaPhoneAlt ,FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div>
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
    <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom bg-success-subtle'>
      <div className=' ms-5 me-auto d-none d-lg-block'>
        <span>Get connected with us on social networks:</span>
      </div>

      <div>
        <Link to='' className='me-4 text-reset'>
        <FaFacebookF />
        </Link>
        <Link to='' className='me-4 text-reset'>
        <FaTwitter />
        </Link>
        <Link to='' className='me-4 text-reset'>
        <FaGoogle />
        </Link>
        <Link to='' className='me-4 text-reset'>
        <FaInstagram />
        </Link>
        <Link to='' className='me-4 text-reset'>
        <FaLinkedin />
        </Link>
        <Link to='' className='me-4 text-reset'>
        <FaGithub />
        </Link>
      </div>
    </section>

    <section className=''>
      <MDBContainer className='text-center text-md-start mt-5'>
        <MDBRow className='mt-3'>
          <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4 text-success'>
              <MDBIcon color='secondary' icon='gem' className='me-3' />
              Foxaisr PVT LTD
            </h6>
            <p>
            Boost your Business with our
            solutions.
            Revolutionizing Business with innovative
            Empowerment Solutions.
            </p>
          </MDBCol>

          <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4 text-success'>Our Services</h6>
            <p >
              <Link to='#!' className='text-reset text-decoration-none fw-bold'>
              Web Developmnet
              </Link>
            </p>
            <p>
            <Link to='#!' className='text-reset text-decoration-none fw-bold'>
            Mobile Application
            </Link>
            </p>
            <p>
            <Link to='#!' className='text-reset text-decoration-none fw-bold'>
            E-Commerce
            </Link>
            </p>
            <p>
            <Link to='#!' className='text-reset text-decoration-none fw-bold'>
            Software Development
            </Link>
            </p>
          </MDBCol>

          <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4 text-success'>Products</h6>
            <p>
              <Link to='#!' className='text-reset text-decoration-none fw-bold'>
              Simple Shiksha
              </Link>
            </p>
            <p>
              <Link to='#!' className='text-reset text-decoration-none fw-bold'>
              Assist Buddi
              </Link>
            </p>
            
            <p>
              <a href='#!' className='text-reset text-decoration-none fw-bold'>
                Help
              </a>
            </p>
          </MDBCol>

          <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
            <h6 className='text-uppercase fw-bold mb-4 text-success'>Contact</h6>
            <p>
              <MDBIcon color='secondary' icon='home' className='me-2' />
              238, Scheme No. 114 Part 1, Opposite Mahindra Showroom, Vijay Nagar, AB Road, Indore M.P. (452010)-India
            </p>
            <p className='fw-bold'>
              <MDBIcon color='secondary' icon='envelope' className='me-3' />
              <MdEmail/>  info@foxaisr.com
            </p>
            <p className='fw-bold'>
              <MDBIcon color='secondary' icon='phone' className='me-3' />
              <FaPhoneAlt /> +91 808 437 8326
            </p>
            <p className='fw-bold'>
              <MDBIcon color='secondary' icon='print' className='me-3' /> 
              <FaWhatsapp /> +91 829 205 0483
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>

    <div className='text-center p-4 bg-danger-subtle'>
      ©Foxaisr Technology Private Limited @ 2024 | All Rights Reserved
    </div>
  </MDBFooter>
    </div>
  )
}

export default Footer