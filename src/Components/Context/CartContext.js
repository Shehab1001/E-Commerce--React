import axios from "axios";
import { createContext } from "react";

export let cartContext = createContext();

export default function CartContextProvider(props) {

    let headers = {
        token: localStorage.getItem('userToken')
    }
    function addToCart(x){
        return axios.post(`https://route-ecommerce.onrender.com/api/v1/cart`,
        {
            productId: x
        },
        {
            headers: headers
        }).then((response)=> response).catch((error)=>error)

    }

    return <cartContext.Provider value={{addToCart}}>
        {props.children}
    </cartContext.Provider>;


}