import axios, { Axios } from 'axios';
import react, { useContext, useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { cartContext } from '../Context/CartContext';

export default function FeaturedProducts() {

    let { addToCart } = useContext(cartContext);

    async function addProduct(productId) {
        let response = await addToCart(productId);
        console.log(response);
    }

    function getFeaturedProduct() {
        return axios.get(`https://route-ecommerce.onrender.com/api/v1/products`)
    }

    let { isLoading, isFetched, data, refetch } = useQuery('featuredProducts', getFeaturedProduct, {
        // cacheTime: 3000,
        // refetchOnMount: false,
        // staleTime: 30000,
        // refetchInterval: 5000,
        // enabled: false
    })
    // console.log('isLoading',isLoading);
    // console.log('isFetched',isFetched);

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
            <h2 className='mb-3'>Featured Product</h2>
            {/* <button onClick={()=>refetch()} className='btn bg-main text-white w-100 mb-5 mt-3'>Get Products</button> */}
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
                    {data?.data.data.map((product) => <div key={product._id} className="col-md-2">
                    <div className="product cursor-pointer py-3 px-2">
                        <Link to={`/productdetails/${product._id}`}>
                            
                                <img src={product.imageCover} className='w-100' alt="" />
                                <p className='text-main'>Category</p>
                                <h4>{product.title.split(" ").slice(0, 3).join(" ")}</h4>
                                <div className="d-flex justify-content-between pt-4">
                                    <p>{product.price} EGP</p>
                                    <p>
                                        <i className='fa fa-star rating-color'></i>
                                        {product.ratingsAverage}
                                    </p>
                                </div>
                          
                        </Link>
                        <button onClick={()=>addProduct(product._id)} className='btn bg-main text-white w-100'>Add to cart</button>
                        </div>
                    </div>

                    )}
                </div>


            }

        </div>

    </>
}

