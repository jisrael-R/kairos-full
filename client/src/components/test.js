
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../images/Logos/490-KairosLogo FINAL.png';
import { Link } from 'react-router-dom';
import { useCurrentWidth } from '../useCurrentWidth';
import { useEffect, useState } from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import '../index.css';

function OffcanvasExample() {
    const [cName, setCName] = useState();
    const [expanded,setExpanded]=useState(false);
    let width = useCurrentWidth();
    useEffect(() => {
        if (width >= 800) {
            return setCName('navegate d-none');
        } else {
            setCName('navegate');
        }
    }, [width]);
    return (
        <>
            {[false].map((expand) => (
                <Navbar  key={expand} expanded={expanded} expand={expand} className={cName}>
                    <Container fluid>
                        <Navbar.Brand>
                            <Link to={'/'}>
                            <img src={Logo} alt="kairo-logo" width={'150px'} />
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")}
                            aria-controls={`offcanvasNavbar-expand-${expand}`}
                        />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                            className="mobile-menu"
                        >
                            <Offcanvas.Header >
                                <Offcanvas.Title
                                    id={`offcanvasNavbarLabel-expand-${expand}`}
                                >
                                 
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav onClick={()=> setExpanded(false)}> <Link to={'/'}>Home</Link></Nav>
                                    <Nav onClick={()=> setExpanded(false)}> <Link to={'/services'}>Services</Link></Nav>
                                    <Nav onClick={()=> setExpanded(false)}> <Link to={'/contact'}>Contact</Link></Nav>
                                 
                                </Nav>
                                
                            </Offcanvas.Body>
                            <div className="logoContainer">
                                <img src={Logo} alt="logo" width={'140px'} />
                                <div className="linked">
                                    <AiOutlineFacebook/>
                                    <AiOutlineInstagram/>
                                    <AiOutlineLinkedin/>
                                </div>
                            </div>
                        </Navbar.Offcanvas>
                        
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default OffcanvasExample;
