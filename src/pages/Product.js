
import axios from "axios";
import { useEffect, useState } from "react";



const Product = () => {

    const [ProductData, setProductData] = useState ();
    
    const getProductData = () => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((res) =>{
                setProductData (res.data);
                console.log(res.data);
            })
            .catch((err) => console.log("you are a failure in life"));
        
        }

    useEffect (() => {
        getProductData();
    }, [])
    
    if (ProductData) {
        return(           
            
            <div>
                {ProductData.map((item) => {
                return (
                <li key = {item.id}><h2>{item.title}</h2><br></br> Price: {item.price} <br></br>{item.description}</li>
                )
                })}
            </div>
        
        )}
    else {
        return (
            <p>Loading...</p>
        )
    }

    
};

export default Product;