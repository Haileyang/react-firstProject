import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg'


export const NavBar = () =>{
    const [activeLink, setActiveLink] = useState ('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50){
                seScrolled(true);
            } else{
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onscroll);
        return () => window.removeEventListener("scroll", onscroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""} >
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === "skils" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("skils")}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("projects")}>Projects</Nav.Link>
                    </Nav>
                    <ul className="social-icons">
                        <li className="social-icon"> 
                            <a href="#"><img src={navIcon1} alt="sns icon" /></a>
                        </li>
                        <li className="social-icon"> 
                            <a href="#"><img src={navIcon2} alt="sns icon" /></a>
                        </li>
                        <li className="social-icon"> 
                            <a href="#"><img src={navIcon3} alt="sns icon" /></a>
                        </li>
                    </ul>
                    <button className="contact-btn" onClick={() => console.log('connect')}>Let's Connect</button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavBar;