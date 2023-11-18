import { Button, Container, Nav, NavLink, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "react-bootstrap"

export default function Header() {
    return (
        <Navbar expand="lg" className="bg position-fixed top-0 w-100 z-3 shadow">
            <Container>
                <NavbarBrand className="text-light">Прописка <strong>Легко</strong> </NavbarBrand>
                <NavbarToggle aria-controls="basic-navbar-nav" className="white-filter" />
                <NavbarCollapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <NavLink href={"tel:+77017156363"} className="text-light fs-5">+7 (701) 715-63-63</NavLink>
                        <Button variant="light">
                            <NavLink href={"https://api.whatsapp.com/send?phone=77017156363"} className="color-pr p-0 fw-bold">Whats App</NavLink>
                        </Button>
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    )
}
