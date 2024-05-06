"use client";
import { ProductType } from "@/lib/definitions";
import { Card } from "flowbite-react";
import { useRouter } from "next/navigation";

export default function CardComponent({
  name,
  price,
  category,
  seller,
  desc,
  image,
}: ProductType) {
  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center">
      <Card
        className="max-w-full bg-gray-100 hover:bg-gray-200 cursor-pointer shadow-lg rounded-lg p-4 mt-10"
        imgSrc={image}
        horizontal
      >
        <a>
          <h5 className="text-center text-xl font-bold text-gray-900 ">
            {name}
          </h5>
        </a>

        <div className="flex flex-col gap-4 mt-3">
          <span className="bg-gray-200 hover:bg-white px-4 py-2 text-md font-bold text-gray-900 rounded-lg ">
            Seller: {seller}
          </span>
          <span className="bg-gray-200 hover:bg-white px-4 py-2 text-md font-bold text-gray-900 rounded-lg ">
            Category: {category?.name || "No category"}
          </span>
        </div>
        <span className="bg-gray-200 hover:bg-white px-4 py-2 text-md font-bold text-gray-900 rounded-lg ">
          Price: ${price}
        </span>

        <p className="bg-gray-200 hover:bg-white px-4 py-2 text-md  text-gray-900 rounded-lg ">
          {desc}
        </p>
      </Card>

      <button
        onClick={handleBack}
        className="px-4 py-2 bg-blue-500 rounded-lg text-lg font-semibold mt-4 text-gray-100 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition-all duration-300 w-40 mb-10"
      >
        Back to Home
      </button>
    </div>
  );
}
