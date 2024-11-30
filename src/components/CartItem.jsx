import { useDispatch } from 'react-redux';
import { ChevronDown, ChevronUp } from '../constants/icons';
import { decrease, increase, removeItem } from '../features/cart/cartSlice';

const CartItem = ({ id, title, singer, price, img, amount }) => {
    const dispatch = useDispatch();
    return (
        <article>
            <img src={img} alt={'${title} 이미지'} />
            <div>
                <h4>
                    {title} | {singer}
                </h4>

                <h4>💲 {price}</h4>
            </div>
            <div>
                <button onClick={() => dispatch(increase(id))}>
                    <ChevronUp />
                </button>
                <p>{amount}</p>

                <button onClick={() =>{
                    if (amount === 1) {
                        dispatch(removeItem(id));
                        return;
                    }
                    dispatch(decrease(id));
                }}>
                    <ChevronDown />
                </button>
            </div>
        </article>
    )
}

export default CartItem;