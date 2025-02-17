// componenets/Slick-Carousel/slick.jsx
import React from "react";
import Slider from "react-slick";

// Official Slick/React Slick styles:
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Overrides
import "Slick.css";

export default function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            {/* Slide 1 */}
            <div className="slide">
            <img src="/path/to/car-image1.jpg" alt="Car Angle 1" />
                <div className="slide-caption">
                    <h2>Front Wing</h2>
                    <p>New aerodynamic shape for improved downforce.</p>
                </div>
            </div>

            {/* Slide 2 */}
            <div className="slide">
            <img src="/path/to/car-image2.jpg" alt="Car Angle 2" />
                <div className="slide-caption">
                    <h2>Sidepods</h2>
                    <p>Revised inlet design to optimize airflow.</p>
                </div>
            </div>

            {/* More slides as needed */}
            <div className="slide">
            <img src="/path/to/car-image3.jpg" alt="Car Angle 3" />
                <div className="slide-caption">
                    <h2>Rear Wing</h2>
                    <p>Upgraded endplates for better drag reduction.</p>
                </div>
            </div>
        </Slider>
    );
}