import { useSelector } from "react-redux";
import { CartIcon } from "../constants/icons";
import styled from "styled-components";

const Title = styled.div`
    width: 100%;
    height: 85px;
    background-color: lavender;
    display: flex;
    justify-content: space-around;
`

const TitleText = styled.h3`
    font-family: monospace;
    font-size: 26px;
`

const CartInfo = styled.div`
    display: flex;
    flex-directions: row;
    width: 45px;
    position: relative;
`

const CountAmount = styled.div`
    background-color: orange;
    color: white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
    position: absolute;
    /* 아이콘 위로 배치하기 위해 조정 */
    top: 28px;
    right: 1px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`

const Navbar = () => {
    const { amount } = useSelector((state) => state.cart);
    
    return (
        <nav>
            <Title>
                <TitleText>❄️ JUNE'S MUSIC STORE </TitleText>
                <CartInfo>
                    <CartIcon />
                    <CountAmount>
                        <p>{amount}</p>
                    </CountAmount>
                </CartInfo>
            </Title>
        </nav>
    )
}

export default Navbar;