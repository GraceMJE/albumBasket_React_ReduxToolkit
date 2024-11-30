import CartItem from './CartItem';
import { useSelector, useDispatch } from "react-redux";
import { openModal } from '../features/modal/modalSlice';

const CartContainer = () => {
    // 구조분해 할당 사용
    const { cartItems, total, amount } = useSelector((store) => store.cart);
    const dispatch = useDispatch();
    
    return (
        <section>
            <header>
                <h2>💽 Music Shopping Cart 🛒</h2>
            </header>
            <div>
                {cartItems.map((item) => {
                    return <CartItem key={item.id} {...item} />;
                })}
            </div>
            <footer>
                <hr />
                <div>
                    <h4>
                        총 가격 <span>💲{total}원</span>
                    </h4>
                </div>
                <button onClick={() => dispatch(openModal())}>
                    장바구니 초기화
                </button>
            </footer>
        </section>
    )
}

export default CartContainer;