"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  increaseQuantity,
  removeFromCart,
  selectProducts,
  selectTotalPrice,
} from "@/redux/features/cart/cartSlice";

export default function Cart() {
  const products = useAppSelector(selectProducts);
  const totalPrice = useAppSelector(selectTotalPrice);
  const dispatch = useAppDispatch();

  return (
    <main >
      <div className="flex flex-col justify-center items-center gap-8">
        {products.length == 0 && <h1 className="text-6xl">Cart is Empty!</h1>}

        {products.length !== 0 &&
          products.map((product) => (
            <section
              className="flex justify-between  h-[150px] w-[40%] bg-orange-50 rounded-xl gap-4"
              key={product.id}
            >
              <div>
                <img
                  className="h-full rounded-xl"
                  src={product.image}
                  alt={product.name}
                />
              </div>

              <div className="flex flex-col justify-center">
                <h1 className="line-clamp-1 text-2xl">{product.name}</h1>
                <p className="line-clamp-1 text-xl">{product.desc}</p>
                <h2 className="text-orange-500 text-xl">${product.price}</h2>
              </div>

              <div className="flex justify-center items-center">
                <div>
                  <svg
                    onClick={() => dispatch(removeFromCart(product.id))}
                    className="w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                  </svg>
                </div>

                <span className="mx-4 text-3xl">{product.quantity}</span>

                <div>
                  <svg
                    className="w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    onClick={(event) => {
                      if (product) {
                        dispatch(increaseQuantity(product));
                      }
                    }}
                  >
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                  </svg>
                </div>
              </div>

              <div className="flex justify-center mx-6">
                <svg
                  onClick={() => dispatch(removeFromCart(product.id))}
                  className=" w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                </svg>
              </div>
            </section>
          ))}
      </div>

      <div>
        {products.length !== 0 && (
          <div>
            <h1 className="text-3xl">
              Total Product{" "}
              <span className="text-red-500">{products.length}</span>
            </h1>
            <h2 className="text-2xl">
              Total Price $ {""}
              <span className="text-red-500">{totalPrice}</span>
            </h2>
          </div>
        )}
      </div>
    </main>
  );
}
