import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Carrito from './CarritoDeCompras';
import { Logo } from './logo';

export const BarraDeNav = () => (
  <>
    <Navbar className="custom-navbar-bg" data-bs-theme="dark">
      <Logo /> 
      <Container>
         
          <Navbar.Brand href="#home">
            𝐊 𝐀 𝐑 𝐎 𝐋 𝐘 𝐒 𝐒 𝐓 𝐎 𝐑 𝐄
          </Navbar.Brand>
          <Navbar.Text>|</Navbar.Text>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
        <Carrito />
      </Navbar>
      <br />
    </>
  );
 
