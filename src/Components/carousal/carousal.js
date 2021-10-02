import React, { Component } from 'react';
import pic1 from './colla01.jpg';
import { Carousel } from 'react-bootstrap';
import pic2 from './colla06.jpg';
import pic3 from './colla04.jpg';

const Carousal = () => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <Carousel fade={true} pause={true} controls={true}>
                        <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={pic1}
                            alt="First slide"
                        />
                        </Carousel.Item>

                        <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={pic2}
                            alt="Third slide"
                        />
                        </Carousel.Item>

                        <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={pic3}
                            alt="Third slide"
                        />
                        </Carousel.Item>

                    </Carousel>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Carousal;