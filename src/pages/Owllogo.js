import styled from "styled-components";
import Fashionowl from "./Fashionowl.png";

export const Image = styled.img`
    width: 7%;

`

const Owllogo = () => {
    return (
        <>
        <Image src={Fashionowl} alt="Logo" />
        </>
    )

}

export default Owllogo;