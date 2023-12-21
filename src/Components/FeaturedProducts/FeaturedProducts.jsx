import axios, { Axios } from 'axios';
import react, { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';


export default function FeaturedProducts() {

    // let [products, setProducts] = useState([]);
    // let [isLoading, setLoading] = useState(true);


    // async function getProducts() {
    //     let { data } = await axios.get('https://route-ecommerce.onrender.com/api/v1/products')
    //     setProducts(data.data)
    //     setLoading(false)
    // }

    // useEffect(() => {
    //     getProducts();
    // }, [])


    return <>
        <div className="container py-5">

            {isLoading ?
                <div className="d-flex align-items-center justify-content-center">
                    <Circles
                        height="80"
                        width="80"
                        color="#4fa94d"
                        ariaLabel="circles-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                </div>

                : <div className="row">
                    {products.map((ele) => <div className="col-md-2">
                        <div className="product p-3">
                            <img src={ele.imageCover} className='w-100' alt="" />
                            <p className='text-main'>Category</p>
                            <h4>{ele.title.split(" ").slice(0, 3).join(" ")}</h4>
                            <div className="d-flex justify-content-between pt-4">
                                <p>{ele.price} EGP</p>
                                <p>
                                    <i className='fa fa-star rating-color'></i>
                                    {ele.ratingsAverage}
                                </p>
                            </div>
                            <button className='btn bg-main text-white w-100'>Add to cart</button>
                        </div>

                    </div>

                    )}
                </div>


            }

        </div>

    </>
}

