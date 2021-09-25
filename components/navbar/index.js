import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Link from 'next/link'

export default function NavBar({ basic = false }) {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md">
        <Container fluid="xxl">
          <Link href={basic ? '#' : '/'} passHref>
            <Navbar.Brand>
              <Image
                alt=""
                src="/navbaricon/logo-lomas.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              SIGT
            </Navbar.Brand>
          </Link>
          {!basic && (
            <>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Nav>
                  <Link href="/" passHref>
                    <Nav.Link>Home</Nav.Link>
                  </Link>
                  <NavDropdown title="Login" id="basic-nav-dropdown">
                    <Link href="/login" passHref>
                      <NavDropdown.Item>Login</NavDropdown.Item>
                    </Link>
                    <NavDropdown.Divider />
                    <Link href="/register" passHref>
                      <NavDropdown.Item>Register</NavDropdown.Item>
                    </Link>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </>
          )}
        </Container>
      </Navbar>
    </>
  )
}
