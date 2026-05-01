import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/slices/CartSlice';
import { toast } from 'react-hot-toast';

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const isInCart = cart.some((p) => p.id === post.id);

  return (
    <div className="flex flex-col justify-between p-4 transition bg-white border rounded-lg shadow-sm hover:shadow-md">

      {/* Image */}
      <img
        src={post.image}
        alt={post.title}
        className="object-contain h-40 mx-auto"
      />

      {/* Content */}
      <div className="mt-4">
        <h2 className="font-medium text-gray-800 line-clamp-1">
          {post.title}
        </h2>

        <p className="mt-1 text-sm text-gray-500 line-clamp-2">
          {post.description}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-4">
        <p className="font-semibold text-gray-900">
          ${post.price}
        </p>

        {
          isInCart ? (
            <button
              onClick={() => {
                dispatch(remove(post.id));
                toast.success("Removed from cart");
              }}
              className="px-3 py-1 text-sm text-red-500 transition border border-red-500 rounded-md hover:bg-red-50"
            >
              Remove
            </button>
          ) : (
            <button
              onClick={() => {
                dispatch(add(post));
                toast.success("Added to cart");
              }}
              className="px-3 py-1 text-sm text-white transition bg-black rounded-md hover:bg-gray-800"
            >
              Add
            </button>
          )
        }
      </div>
    </div>
  );
};

export default Product;