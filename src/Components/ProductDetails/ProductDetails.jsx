import react from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
    
    let params = useParams();
    console.log(params.id);


   async function getProductDetails(id){
        let {data} = await axios.get(`https://route-ecommerce.onrender.com/api/v1/products/${id}`)

    }
  
    
    
    return <>
      
      <h1>Product Details</h1>
    </>
}

