/* eslint-disable jsx-a11y/anchor-is-valid */
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export function MyNavbar() {
  return (
    <>
      <div className="py-1 bg-success text-white">
        <div className="container">
          <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
            <div className="col-lg-12 d-block">
              <div className="row d-flex">
                <div className="col-md pr-4 d-flex topper align-items-center">
                  <div className="icon mr-2 d-flex justify-content-center align-items-center">
                    <span className="icon-phone2" />
                  </div>
                  <span className="text">+ 1235 2355 98</span>
                </div>
                <div className="col-md pr-4 d-flex topper align-items-center">
                  <div className="icon mr-2 d-flex justify-content-center align-items-center">
                    <span className="icon-paper-plane" />
                  </div>
                  <span className="text">youremail@email.com</span>
                </div>
                <div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right">
                  <span className="text">
                    3-5 Business days delivery &amp; Free Returns
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
        <Container>
          <Navbar.Brand className="hover-text-success fw-bold" href="#home">
            VegeFoods
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="mx-3" href="#home">
                Home
              </Nav.Link>
              <NavDropdown
                className="mx-3"
                title="Shop"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item className="my-2" href="#action/3.1">
                  Shop
                </NavDropdown.Item>
                <NavDropdown.Item className="my-2" href="#action/3.2">
                  Wishlist
                </NavDropdown.Item>
                <NavDropdown.Item className="my-2" href="#action/3.3">
                  Single Product
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="mx-3" href="#about">
                About
              </Nav.Link>
              <Nav.Link className="mx-3" href="#blog">
                Blog
              </Nav.Link>
              <Nav.Link className="mx-3" href="#contact">
                Contact
              </Nav.Link>
              <Nav.Link className="mx-3" href="#cart">
                <i className="bi bi-basket-fill"></i>
                [0]
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
