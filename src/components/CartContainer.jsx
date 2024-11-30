import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../features/modal/modalSlice";
import styled from "styled-components";

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  return (
    <Section>
      <Header>
        <ShoppingCart>Music Shopping Cart 🛒</ShoppingCart>
      </Header>
      <Divider />
      <CartItemsContainer>
        {cartItems.length > 0 ? (
          cartItems.map((item) => <CartItem key={item.id} {...item} />)
        ) : (
          <EmptyCart>장바구니가 비어있습니다.</EmptyCart>
        )}
      </CartItemsContainer>
      {cartItems.length > 0 && (
        <Footer>
          <Divider />
          <Total>
            총 가격: <span>💲{total}원</span>
          </Total>
          <ClearButton onClick={() => dispatch(openModal())}>
            장바구니 초기화
          </ClearButton>
        </Footer>
      )}
    </Section>
  );
};

export default CartContainer;

// Styled-components
const Section = styled.section`
  width: 100%;
  border-radius: 10px;
`;

const Header = styled.header`
  width: 100%;
  margin-bottom: 20px;
`;

const ShoppingCart = styled.h2`
  font-family: monospace;
  font-size: 21.5px;
  text-align: center;
  color: #333;
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: #ddd;
  margin: 1rem 0;
`;

const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const EmptyCart = styled.p`
  text-align: center;
  font-size: 18px;
  color: #999;
  margin: 2rem 0;
`;

const Footer = styled.footer`
  margin-top: 2rem;
  text-align: center;
`;

const Total = styled.h4`
  font-size: 18px;
  font-weight: bold;
  color: #333;

  span {
    color: #1e90ff;
  }
`;

const ClearButton = styled.button`
  margin-top: 1rem;
  padding: 0.8rem 1.5rem;
  background-color: #ff4d4f;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e63946;
  }
`;
