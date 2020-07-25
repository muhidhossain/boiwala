import React, { useState } from 'react';
import './CarouselSec.css';
import 'pure-react-carousel/dist/react-carousel.es.css';
import carousel1 from '../../images/carousel/1406842.jpg';
import carousel2 from '../../images/carousel/190-1900799_uhd-16-fantasy-art-wallpaper-4k.jpg';
import carousel3 from '../../images/carousel/where-fairies-live-2K-wallpaper-middle-size.jpg';
import { Carousel } from 'react-bootstrap';




const CarouselSec = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="carouselSec">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CarouselSec;