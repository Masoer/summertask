import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import GlobalStyle from "./Globalcomponents/Globalcomponent";
import { Navbar } from "./pages/Navbar";
import Shoppingcart from "./pages/Shoppingcart";

function App() {
  return (
    <>
    <GlobalStyle />
        <Router>
          
          <Navbar sticky="top">
            <Link to ="/">/Shop</Link>
            <Link to ="/Shoppingcart">/Shopping cart</Link>
          
          
          </Navbar>

          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/Shoppingcart" element={<Shoppingcart/>} />
          </Routes>
        


      </Router>
    
     
    </>
    
  );
}


const Shop = () => {
  return (
      <>
      <h1>shop</h1>
      </>
  )
};

export default App;
