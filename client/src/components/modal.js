import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/esm/Col';
import { Link } from 'react-router-dom';
export default function Sent({validation,name}) {
  const values = ['sm-down',];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  
  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
      {values.map((v, idx) => (
        <Button type='submit' disabled={validation} variant='warning' key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
          {!validation ? 'Submit Form' :'Form Submitted! '}
          
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{!validation ? 'Oops...something went wrong!':'Sent'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{!validation ? 'Please, Fill Out All Highlighted Fields.':`Thank you, ${name} Our Team Will be In Contact Soon!` }
       {validation && <Col>
       <Link to={'/services'}><Button  variant='warning'>Done</Button></Link> 
        </Col>}
        
        </Modal.Body>
        
      </Modal>
    </>
  );
}