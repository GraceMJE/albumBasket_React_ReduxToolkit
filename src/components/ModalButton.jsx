import { useDispatch } from "react-redux";
import styled from "styled-components";
import { clearCart } from "../features/cart/cartSlice";
import { closeModal } from "../features/modal/modalSlice";

const ModalButton = () => {
  const dispatch = useDispatch();

  return (
    <ButtonContainer>
      <StyledButton
        type="button"
        confirm
        onClick={() => {
          dispatch(clearCart());
          dispatch(closeModal());
        }}
      >
        네
      </StyledButton>
      <StyledButton
        type="button"
        onClick={() => {
          dispatch(closeModal());
        }}
      >
        아니오
      </StyledButton>
    </ButtonContainer>
  );
};

export default ModalButton;

// Styled-components
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const StyledButton = styled.button`
  padding: 0.5rem 1.5rem;
  margin: 10px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  background-color: ${(props) => (props.confirm ? "#1e90ff" : "#ccc")};
  color: ${(props) => (props.confirm ? "white" : "#333")};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.confirm ? "#0066cc" : "#bbb")};
  }
`;
