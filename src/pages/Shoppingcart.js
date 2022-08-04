const Shoppingcart = () => {
    let finalCart = localStorage.getItem("cart");
    let renderCart = JSON.parse(finalCart)

   

    return (
        <>
        <h1>Cart</h1>

        {renderCart.map((item) => {
            return(
                <p key={item.id}>

                    <img src={item.image} alt="product"></img>
                    <h2>{item.title}</h2>
                    <br></br> 
                    Price: ${item.price} 
                    <br></br>
                    <button>Delete</button>
                </p>

            )
            
            } )}
        </>
    )
};


export default Shoppingcart;