import react from 'react';
import slide1 from '../../Assets/images/slider-image-1.jpeg'
import slide2 from '../../Assets/images/slider-image-2.jpeg'
import slide3 from '../../Assets/images/slider-image-3.jpeg'
import blog1 from '../../Assets/images/blog-img-1.jpeg'
import blog2 from '../../Assets/images/blog-img-2.jpeg'


import Slider from "react-slick";

export default function MainSlider() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    return <>

        <div className="row gx-0 mb-3">
            <div className="col-md-9">
                <Slider {...settings}>
                    <img height={400} className='w-100' src={slide1} alt="img1" />
                    <img height={400} className='w-100' src={slide2} alt="img2" />
                    <img height={400} className='w-100' src={slide3} alt="img3" />
                </Slider>
            </div>
            <div className="col-md-3">
                <img height={200} className='w-100' src={blog1} alt="img2" />
                <img height={200} className='w-100' src={blog2} alt="img3" />
            </div>
        </div>

    </>
}

