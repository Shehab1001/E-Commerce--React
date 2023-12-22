import axios from 'axios';
import react, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {

    let params = useParams();

    function getProductDetails(id) {
        return axios.get(`https://route-ecommerce.onrender.com/api/v1/products/${id}`)
    }




    let { isError, isLoading, data } = useQuery('productDetails', () => getProductDetails(params.id))

    console.log(data?.data.data);


    // let params = useParams();
    // console.log(params.id);
    // const [productDetails, setProductsDetails] = useState(null);
    // async function getProductDetails(id) {
    //     let { data } = await axios.get(`https://route-ecommerce.onrender.com/api/v1/products/${id}`)
    //     console.log(data);
    //     setProductsDetails(data);
    // }

    // useEffect(() => {
    //     getProductDetails(params.id)
    // }, [])



    return <>
       
        <Helmet>
            <meta name="description" content={data?.data.data.description} />
            <title>{data?.data.data.title}</title>
        </Helmet>

        <h2 className='mt-4'>Product Details</h2>
        {data?.data.data ? <div>
            <div className="row py-5 align-items-center g-5">
                <div className="col-md-4">
                    <img className='w-100' src={data?.data.data.imageCover} alt={data?.data.data.title} />
                </div>
                <div className="col-md-8">
                    <h2 className='h5'>{data?.data.data.title}</h2>
                    <p>{data?.data.data.description}</p>
                    <h6 className='text-main'>{data?.data.data.category.name}</h6>
                    <div className="d-flex justify-content-between mt-5">
                        <span>{data?.data.data.price} EGP</span>
                        <span><i className='fas fa-star rating-color'></i> {data?.data.data.ratingsAverage}</span>
                    </div>
                    <button className='w-100 btn bg-main text-white mt-3'>+ add to cart</button>
                </div>
            </div>
        </div> : ''}



    </>
}

