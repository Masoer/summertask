import axios from "axios";
import { useEffect, useState } from "react";
import { Styledcontainer, StyledImage, StyledPage } from "./Styleproduct";

const Product = () => {
  let currentCart = [];

  const [ProductData, setProductData] = useState();

  const getProductData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProductData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log("you are a failure in life"));
  };

  useEffect(() => {
    getProductData();
  }, []);

  if (ProductData) {
    return (
      <div>
        <StyledPage>
          {ProductData.map((item) => {
            return (
              <Styledcontainer>
                <div key={item.id}>
                  <StyledImage src={item.image} alt="product" />
                  <h2>{item.title}</h2>
                  <br></br>
                  Price: ${item.price}
                  <br></br>
                  <button
                    onClick={() => {
                      currentCart.push(item);
                    }}
                  >
                    Buy
                  </button>
                  <button
                    onClick={() => {
                      localStorage.setItem("cart", JSON.stringify(currentCart));
                    }}
                  >
                    {" "}
                    Add to cart{" "}
                  </button>
                </div>
              </Styledcontainer>
            );
          })}
        </StyledPage>
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
};

export { Product };
