import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList"

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="w-full flex items-center justify-center">
    <div className="m-4 p-4 bg-amber-50 text-center w-170">
        <div className="flex items-center justify-between">
            <h1 className=" text-2xl">
                Cart
            </h1>
            <button className="cursor-pointer border m-2 px-2 py-1 rounded-lg items-end" onClick={handleClearCart}>Clear Cart</button>
        </div>
        <div className="border rounded">
            {cartItems.length === 0 && (<h1>Cart is empty, Add items to the cart!</h1>)}
            <ItemList items={cartItems} />
        </div>
    </div>
    </div>
  )
};

export default Cart;
