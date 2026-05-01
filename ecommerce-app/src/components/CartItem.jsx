import React from "react";
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/CartSlice"; // adjust path
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.success("Item Removed!");
    };

    return (
        <div className="flex gap-4 p-4 mb-4 border backdrop-blur-lg bg-white/10 border-white/20 rounded-xl">
            <img src={item.image} className="h-24" />

            <div className="flex-1">
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-300">
                    {item.description.length > 80
                        ? item.description.slice(0, 80) + "..."
                        : item.description}
                </p>

                <div className="flex items-center justify-between mt-2">
                    <p className="text-green-400">${item.price}</p>

                    <button
                        onClick={removeFromCart}
                        className="text-red-400 transition hover:scale-110"
                    >
                        <FcDeleteDatabase size={22} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
