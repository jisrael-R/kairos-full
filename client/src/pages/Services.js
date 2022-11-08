import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ServiceList from '../data';



const Services = () => {
    const [list] = useState(ServiceList);
  
   
    
 
    
    return (
        <div className="service-container">
            <div className="service-title">
                <h1>Our Services</h1>
                <div className="underline"></div>
            </div>
            <section className="section-services">
                {list.map((service) => {
                    return (
                        <Card
                            style={{ width: '18rem' }}
                            key={service.id}
                            className="info-cards"
                        >
                            <Card.Img
                                variant="top"
                                src={service.img}
                                height={'190px'}
                            />
                            <Card.Body>
                                <Card.Title>{service.service}</Card.Title>
                                <Card.Text>{service.description}</Card.Text>
                                <Button variant="warning" ><a target={'_blank'} rel='noreferrer' href={'https://docs.google.com/forms/d/e/1FAIpQLSd92bRVwaze-7VTv722oAPmJOyPWOcFT--chaQ40QOE4mK13w/viewform?usp=sf_link'}>Book Service</a></Button>
                            </Card.Body>
                        </Card>
                    );
                })}
            </section>
        </div>
    );
};
export default Services;