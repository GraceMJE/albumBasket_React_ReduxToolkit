import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import Footer from "./components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal } from "./features/cart/cartSlice";
import { useEffect } from "react";
import ModalPortal from "./components/ModalPortal";
import Modal from "./components/Modal";
import styled from "styled-components";

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems, dispatch]);

  return (
    <AppContainer>
      <header style={{width: '100%'}}>
        <Navbar />
      </header>
      <Main>
        <CartContainer />
        { isOpen && 
          <ModalPortal>
            <Modal>
              <h4>담아두신 모든 음반을 삭제하시겠습니까?</h4>
            </Modal>
          </ModalPortal> }
      </Main>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </AppContainer>
  );
}

export default App;

// Styled-components
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 1400px;
  align-items: center;
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  overflow-y: auto;

  /* 스크롤바 숨기기 */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

const FooterContainer = styled.footer`
  background-color: lavender;
  text-align: center;
  font-size: 12px;
  color: grey;
  width: 100%;
`;
