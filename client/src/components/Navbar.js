import { Link } from 'react-router-dom';
import Logo from '../images/Logos/490-KairosLogo FINAL.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import { BiMenu } from 'react-icons/bi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { useCurrentWidth } from '../useCurrentWidth';
import '../index.css';
import OffcanvasExample from './test';

import { useEffect, useState } from 'react';

const Navbars = () => {
    const [cName, setCName] = useState();
    let width = useCurrentWidth();

    useEffect(() => {
        if (width <= 800) {
            return setCName('navegate d-none');
        } else {
            setCName('navegate');
        }
    }, [width]);

    return (
        <nav>
            <OffcanvasExample />
            <Navbar variant="light" className={cName}>
                <Container>
                    <Navbar.Brand>
                        <img src={Logo} alt="kairos-logo" width={'180px'} />
                    </Navbar.Brand>

                    <Row className=" justify-content-sm-right">
                        <h2 className="menu-icon">
                            <BiMenu />
                        </h2>
                        <Nav className="me-auto linked">
                            <Nav>
                                <Link to={'/'}>Home</Link>
                            </Nav>
                            <Nav>
                                <Link to={'/services'}>Services</Link>
                            </Nav>
                            <Nav>
                                <a target={'_blank'} rel='noreferrer' href={'https://docs.google.com/forms/d/e/1FAIpQLSd92bRVwaze-7VTv722oAPmJOyPWOcFT--chaQ40QOE4mK13w/viewform?usp=sf_link'}>Contact</a>
                            </Nav>
                        </Nav>
                    </Row>
                </Container>
            </Navbar>
            <Navbar expand="lg" className="social">
                <Container>
                    <Navbar.Brand href="#"></Navbar.Brand>
                    <div className="rows">
                        <h4>
                            <a href="https://www.instagram.com/kairostechservices/" target='_blank' rel='noreferrer'>
                                <AiOutlineInstagram />
                            </a>
                        </h4>
                        <h4>
                            <a href="https://www.facebook.com/people/Kairos-Tech-Services-LLC/100086430137281/" target='_blank' rel='noreferrer'>
                                 <AiOutlineFacebook />
                            </a>
                           
                        </h4>
                        <h4>
                            <a href="https://www.linkedin.com/company/kairos-tech-services-llc/" target='_blank' rel='noreferrer'>
                                <AiOutlineLinkedin />
                            </a>
                            
                        </h4>
                    </div>
                </Container>
            </Navbar>
        </nav>
    );
};
export default Navbars;
