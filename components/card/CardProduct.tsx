"use client";

import { Card } from "flowbite-react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { ProductType } from "@/lib/definitions";
import { addToCart } from "@/redux/features/cart/cartSlice";

export default function CardProduct({
  id,
  name,
  image,
  price,
  onClick,
}:ProductType ) {
  const dispatch = useAppDispatch();

  return (
    <div>
      <Card
        onClick={onClick}
        className="w-[300px] bg-orange-50 hover:bg-orange-100 cursor-pointer shadow-lg rounded-lg flex flex-col items-center justify-center transition-shadow duration-500 ease-in-out hover:shadow-2xl"
        renderImage={() => (
          <img src={image} className="w-full h-[200px] rounded-t-lg" />
        )}
      >
        <a>
          <h5 className="text-center text-xl font-semibold text-gray-900 line-clamp-1">
            {name}
          </h5>
        </a>

      
        <div className="flex flex-col items-center justify-between">
          <button
            onClick={(event) => {
              event.stopPropagation();
              dispatch(addToCart({ id, name, image, price, quantity:1, desc:"", seller:""}));
            }}
            className="px-16 rounded-lg bg-orange-400 py-2.5 text-center text-sm font-medium text-white hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-300"
          >
            Add to cart
          </button>
        </div>
      </Card>
    </div>
  );
}
