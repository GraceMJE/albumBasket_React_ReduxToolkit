import { useDispatch } from "react-redux";
import styled from "styled-components";
import { ChevronDown, ChevronUp } from "../constants/icons";
import { decrease, increase, removeItem } from "../features/cart/cartSlice";

const CartItem = ({ id, title, singer, price, img, amount }) => {
  const dispatch = useDispatch();

  return (
    <ItemContainer>
      <Image src={img} alt={`${title} 이미지`} />
      <Details>
        <Title>{title}</Title>
        <Singer>{singer}</Singer>
        <Price>💲 {price}</Price>
      </Details>
      <Actions>
        <Button onClick={() => dispatch(increase(id))}>
          <ChevronUp />
        </Button>
        <Amount>{amount}</Amount>
        <Button
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease(id));
          }}
        >
          <ChevronDown />
        </Button>
      </Actions>
    </ItemContainer>
  );
};

export default CartItem;

// Styled-components
const ItemContainer = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 750px;
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
`;

const Details = styled.div`
  flex: 1;
  margin-left: 1rem;
`;

const Title = styled.h4`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #333;
`;

const Singer = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0.5rem 0 0;
`;

const Price = styled.h4`
  font-size: 14px;
  color: #1e90ff;
  margin-top: 0.5rem;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #555;
  padding: 0.5rem;
  transition: color 0.3s;

  &:hover {
    color: #1e90ff;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

const Amount = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin: 0.5rem 0;
`;
