import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";
import './Menu.css'

function Menu() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="primary" data-bs-theme="dark">
      <Container style={{padding:'1%'}}>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto" >
            <Nav.Link href="#features" style={{color:'white',fontWeight:'500'}}>Home</Nav.Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
           
          </Nav>
          <Nav style={{gap:'5vh'}}>
          <NavDropdown title="Package" id="collapsible-nav-dropdown"  className='whitecl'>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Destination" id="collapsible-nav-dropdown" className='whitecl'>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Blog" id="collapsible-nav-dropdown" className='whitecl'>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#deets" style={{color:'white',fontWeight:'400'}}>Contact</Nav.Link>
            <Nav.Link eventKey={2} href="#memes" style={{color:'white',fontWeight:'400'}}>
            <FaSearch />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Menu
