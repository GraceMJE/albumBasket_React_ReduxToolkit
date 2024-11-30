import { useSelector } from "react-redux";
import { CartIcon } from "../constants/icons";

const Navbar = () => {
    const { amount } = useSelector((state) => state.cart);
    
    return (
        <nav>
            <div>
                <h3>💽 Music Shopping Cart 🛒</h3>
                <div>
                    <CartIcon />
                    <div>
                        <p>{amount}</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;