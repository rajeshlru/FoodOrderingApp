import { useSelector } from "react-redux";
import { clearcart } from "../utils/cartSlice";
import CartItemList from "./CartItemList";
import { useDispatch } from "react-redux";
const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearcart());
  };
  const cartItems = useSelector((store) => store.cart.items);
  if (cartItems.length === 0) {
    return (
      <div className="flex flex-row items-center justify-center h-auto">
        <div className="text-3xl font-bold mt-20 text-red-400">
          Your Cart is Empty
          <div className="text-3xl mt-5 font-bold text-green-400">
            {" "}
            Please Add Items!!
          </div>
        </div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
          className="h-[29rem] w-[28rem] mt-10"
        />
      </div>
    );
  }
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center my-6 text-green-300">
        Your Cart
      </h1>
      {/* <p className="text-center text-gray-600">Your cart is currently empty.</p> */}

      <div className=" flex  flex-col mx-40">
        <div flex="1" className="flex flex-row items-center justify-around">
          <h1 className="text-3xl font-[340] mt-2 ">
            Cart Items-{" "}
            <span className="text-red-500">({cartItems.length})</span>
          </h1>{" "}
          <div className="text-3xl font-semibold mt-2 text-red-500 mx-5 ">
            {" "}
          </div>{" "}
          <div>
            <button
              className="text-3xl font-serif font-semibold bg-red-300 p-2 rounded-[12px] text-white hover:bg-red-500 transition duration-300 mt-3"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          </div>
        </div>
        <div className="my-15">
          {" "}
          <CartItemList items={cartItems} />
        </div>
      </div>
    </div>
  );
};
export default Cart;
