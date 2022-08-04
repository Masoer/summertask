import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import GlobalStyle from "./Globalcomponents/Globalcomponent";
import Aboutus from "./pages/Aboutus";

import { Navbar } from "./pages/Navbar";
import Owllogo from "./pages/Owllogo";
import Shop from "./pages/Shop";
import Shoppingcart from "./pages/Shoppingcart";

function App() {
  return (
    <>
    <GlobalStyle />
        <Router>
          
          <Navbar sticky="top">
            <Owllogo/>
            
            <Link to ="/Shop"> /Shop </Link>
            <Link to ="/Shoppingcart">/Shopping cart</Link>
            <Link to ="/Aboutus"> /About us</Link>
          
          
          </Navbar>

          <Routes>a
            <Route path="*" element={<Shop />} />
            <Route path="/Shoppingcart" element={<Shoppingcart/>} />
            <Route path="/Aboutus" element={<Aboutus />} />
            
          </Routes>
        


      </Router>
    
   
    </>
    
  );
}



export default App;
