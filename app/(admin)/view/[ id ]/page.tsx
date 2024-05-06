"use client";
import { useEffect, useState } from "react";
import  { API_URL, ProductType } from "@/lib/definitions";
import { Modal } from "flowbite-react";
import Image from "next/image";

interface ViewPageProps {
  productDetail: ProductType | null;
  onClose: () => void;
}

const ViewPage = ({ productDetail, onClose }: any) => {
  const [data, setData] = useState<any>(null);
  const imagePlaceholder =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI4PG970kLEIAwXbJGaMfq5tlVDqnBbuDP_MRmm2JlhA&s";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_URL}${productDetail?.id}`);
        const responseData = await res.json();
        setData(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (productDetail) {
      fetchData();
    }
  }, [productDetail]);

  return (
    <main>
      {/* for product detail */}
      <Modal show={true} onClose={onClose}>
        <h1 className="text-center text-3xl py-6">Product Detail</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
            href="/dashboard"
          />
        </svg>
        <Modal.Body className="bg-gray-200">
          <div className="grid  space-y-6 justify-center items-center">
            <Image
              src={productDetail?.image || imagePlaceholder}
              alt={productDetail?.name || "Untitled"}
              width={300}
              height={300}
              className="mx-auto rounded"
            />
            <a>
              <h5 className="text-center text-xl font-bold text-gray-900 ">
                {data?.name}
              </h5>
            </a>

            <div className="flex flex-col gap-4 mt-3">
              <span className="bg-white  px-4 py-2 text-md font-bold text-gray-900 rounded-lg ">
                Seller: {data?.seller || "No Seller"}
              </span>
              <span className="bg-white  px-4 py-2 text-md font-bold text-gray-900 rounded-lg ">
                Category: {data?.category?.name || "No category"}
              </span>
            </div>
            <span className="bg-white  px-4 py-2 text-md font-bold text-gray-900 rounded-lg ">
              Price: ${data?.price}
            </span>

            <p className="bg-white  px-4 py-2 text-md  text-gray-900 rounded-lg ">
              {data?.desc || "No Description"}
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </main>
  );
};

export default ViewPage;
