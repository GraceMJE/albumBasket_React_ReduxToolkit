import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../features/cart/cartSlice'
import { closeModal } from '../features/modal/modalSlice';

const ModalButton = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <button 
                type='button' 
                onClick={() => {
                    dispatch(clearCart());
                    // 모달 꺼지는 상태 연결
                    dispatch(closeModal());
                }}
            >
                네
            </button>
            <button 
                type='button' 
                onClick={() => {
                    // 모달 꺼지는 상태 연결
                    dispatch(closeModal());
                }}
            >
                아니오
            </button>
        </div>
    )
}

export default ModalButton;