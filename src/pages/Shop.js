
import Fashion from "./Fashion.jpg";
import  styled  from "styled-components";
import Product from "./Product";


export const Container = styled.section`
    position: relative;
    text-align: center;
    color: white;

`

export const Bottomtext = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
    padding: 50px;
`


export const Image = styled.img `
    display: flex;
    flex-direction: row;
    height: 100%;
    max-width: 100%;
    margin: 0 auto;
    top: 0;

`

export const Shopnowbutton = styled.button `
    width: 150px;
    padding: 10px;
    margin: 0 50px;
    

`

const Shop = () => {
    return (
        <>
        
            
            <Container>
                <Image src={Fashion} alt="Fashion" />
                <Bottomtext>
                    <h1>New Fall-Winter Collection</h1>
                    <p>Shop the latest Fashion</p>
                    <Shopnowbutton >Shop now</Shopnowbutton>
                </Bottomtext>
            </Container>
            <div></div>
            <Product />
                
            
        </>
    )
  };

  export default Shop;