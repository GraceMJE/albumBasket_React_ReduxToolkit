import ModalButton from "./ModalButton";
import styled from "styled-components";

const Modal = ({ children }) => {
  return (
    <Overlay>
      <ModalContent>
        {children}
        <ModalButton />
      </ModalContent>
    </Overlay>
  );
};

export default Modal;

// Styled-components
const Overlay = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  text-align: center;
  width: 100%;
  max-width: 400px;
`;
