import './index.css';
import { BrowserRouter, Link } from "react-router-dom";
import { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import image from "./Resume/Resume.pdf"
import { AnimatedRoutes } from "./components/Animatedroutes"

export default function App() {

  const ele = useRef()

  // className change function 

  const toggle = () => {
    ele.current.className += " navlink"
  }

  return (

    // Router used for navigation through pages

    <div>
      <BrowserRouter>
        <div>
          <Navbar sticky="top" className='navbarbg' collapseOnSelect expand="lg" variant="dark">
            <Container>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                  <Navbar.Brand></Navbar.Brand>
                  <Nav.Link className='navlinkblog' ref={ele} as={Link} to="/">About</Nav.Link> &nbsp;&nbsp;&nbsp;&nbsp;
                  <Nav.Link className='navlink' onClick={() => toggle()} as={Link} to="/projects">Projects</Nav.Link> &nbsp;&nbsp;&nbsp;&nbsp;
                  <Nav.Link className='navlink' onClick={() => toggle()} as={Link} to="/skills">Skills</Nav.Link> &nbsp;&nbsp;&nbsp;&nbsp;
                  <Nav.Link className='navlink' onClick={() => toggle()} as={Link} to="/contact">Contact</Nav.Link> &nbsp;&nbsp;&nbsp;&nbsp;
                  <Nav.Link className='navlinkaresume' href="https://drive.google.com/file/d/1kVwR5crW9-zs_2HAFgA0rzlMeHSKZi1Q/view?usp=sharing" target="_blank" >Resume</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  )
}























