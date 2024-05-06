"use client";
import CardProduct from "@/components/card/CardProduct";
import { API_URL, ProductType } from "@/lib/definitions";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Pagination, Button } from "@nextui-org/react";
import { useGetProductsQuery } from "@/redux/service/product";
import { current } from "@reduxjs/toolkit";

export default function HomePage() {
  // const [products, setProducts] = useState<ProductType[]>([]);
  const router = useRouter();
  // const [currentPage, setCurrentPage] = React.useState(1);
  const { data, error, isLoading, isFetching } = useGetProductsQuery({
    page: 1,
    pageSize: 10,
  });

  console.log("data", data);
  console.log("error", error);
  console.log("isLoading", isLoading);

  const products = data?.results || [];

  return (
    <div className="flex flex-col items-center justify-center my-10">
      <h2 className="text-4xl font-bold text-center text-gray-900 my-4">
        CSTAD E-COMMERCE
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {products.map((product: ProductType, index: any) => (
          <CardProduct
            onClick={() => router.push(`/service/${product.id}`)}
            key={index}
            id={product.id}
            price={product.price}
            name={product.name}
            image={product.image}
            quantity={product.quantity}
            desc={product.desc}
            seller={product.seller}
          />
        ))}
      </div>

      <div className="flex flex-col gap-5 items-center">
        <p className="text-small text-default-500">
          Selected Page: {data?.pageNumber }
        </p>
        <Pagination
          total={products.totalPages || 0}
          color="secondary"
          page={products.pageNumber || 1}
          onChange={(page) => {
            // goToPage(page);
            console.log(page);
          }}
        />
        <div className="flex gap-10">
          <Button
            size="sm"
            variant="flat"
            color="secondary"
            onPress={ () => {
              data.previous;
            } }
            className="bg-orange-300 rounded "
          >
            Previous
          </Button>

          <Button
            size="sm"
            variant="flat"
            color="secondary"
            onClick={
              () => {
                data.next;
              }
              // setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev))
            }
            className="bg-orange-300 rounded "
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
