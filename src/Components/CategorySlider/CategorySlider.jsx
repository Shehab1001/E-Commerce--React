import axios from 'axios';
import Slider from "react-slick";
import { useQuery } from 'react-query';

export default function CategorySlider() {
    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 4,
        arrows: false
    };

    function getCategories() {
        return axios.get(`https://route-ecommerce.onrender.com/api/v1/categories`)
    }
    
    let { isLoading, isError, data } = useQuery('CategorySlider', getCategories)
    console.log(data?.data.data);


   

    return <>
        {data?.data.data ? <div className='py-3'>
            <Slider {...settings}>
                {data?.data.data.map((category) => <img key={category._id}  src={category.image} height={200} className='w-100' />)}
            </Slider>
        </div> : '' }

    </>
}

