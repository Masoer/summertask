import { useState } from "react";
import { AlignRight, CartItem, StyledImage } from "./Styleproduct";

const Shoppingcart = () => {
  const [finalCart, setFinalCart] = useState(localStorage.getItem("cart"));
  const [renderCart, setRenderCart] = useState(JSON.parse(finalCart));

  const [ProductData, setProductData] = useState(renderCart);
  const removeItem = (index) => {
    setProductData(ProductData.filter((o, i) => index !== i));
  };

  return (
    <>
      <h1>Cart</h1>

      {renderCart.map((item) => {
        return (
          <CartItem key={item.id}>
            <StyledImage src={item.image} alt="product"></StyledImage>
            <h3>{item.title}</h3>
            Price: ${item.price}
            <button
              onClick={() => {
                renderCart.pop(removeItem(item));
              }}
            >
              Delete
            </button>
          </CartItem>
        );
      })}
      <AlignRight>
        <p>Total Cost: Free</p>
        <button
          onClick={() => {
            alert(
              "Not a real store. This page is made with react using axios API Call."
            );
          }}
        >
          Place Order
        </button>
      </AlignRight>
    </>
  );
};

export default Shoppingcart;
