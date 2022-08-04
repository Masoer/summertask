
import axios from "axios";
import { useEffect, useState } from "react";



const Product = () => {
    
    let currentCart = []

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
                <p key = {item.id}>
                    <img src={item.image} alt="product"></img>
                    <h2>{item.title}</h2>
                    <br></br> 
                    Price: ${item.price} 
                    <br></br>
                    <button onClick = { () => {
                        currentCart.push(item)
                    }}>Buy</button>
                    <button onClick = { () => { 
                        localStorage.setItem ("cart", JSON.stringify(currentCart))
                    }}> To cart </button>
                </p>
                
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