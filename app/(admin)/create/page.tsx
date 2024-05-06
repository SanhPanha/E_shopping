"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  API_URL_CREATE,
  ProductType,
  initialValues,
  token,
} from "@/lib/definitions";

const FILE_SIZE = 1024 * 1024 * 2; // 2MB
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png", "image/gif"];

const validationSchema = Yup.object().shape({
  categoryName: Yup.string().required("Required"),
  name: Yup.string().required("Required"),
  desc: Yup.string().nullable(),
  price: Yup.number().required("Required"),
  quantity: Yup.number().required("Required"),
  fileIcon: Yup.mixed()
    .test("fileFormat", "Unsupported Format", (value: any) => {
      if (!value) {
        return true;
      }
      return SUPPORTED_FORMATS.includes(value.type);
    })
    .test("fileSize", "File Size is too large", (value: any) => {
      if (!value) {
        true;
      }
      return value.size <= FILE_SIZE;
    })

    .required("Required"),
  fileProduct: Yup.mixed()
    .test("fileFormat", "Unsupported Format", (value: any) => {
      if (!value) {
        return true;
      }
      return SUPPORTED_FORMATS.includes(value.type);
    })
    .test("fileSize", "File Size is too large", (value: any) => {
      if (!value) {
        true;
      }
      return value.size <= FILE_SIZE;
    })

    .required("Required"),
});

export default function Product() {
  const router = useRouter();
  const handleUpload = async (
    file: any,
    name: any,
    typeFile: "category" | "brand" | "product"
  ) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", file);

    const rest = await fetch(`${API_URL_CREATE}file/${typeFile}/`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await rest.json();
    return data.image;
  };

  const CustomInput = ({ field, setFieldValue }: any) => {
    const [imagePreview, setImagePreview] = useState("");

    const handleUploadFile = (e: any) => {
      const file = e.target.files[0];
      const localUrl = URL.createObjectURL(file);
      console.log(localUrl);
      setImagePreview(localUrl);

      setFieldValue(field.name, file);
    };
    return (
      <div>
        <input onChange={(e) => handleUploadFile(e)} type="file" />
        {imagePreview && (
          <Image src={imagePreview} alt="preview" width={200} height={200} />
        )}
      </div>
    );
  };

  const handleSubmitProduct = async (value: ProductType) => {
    const res = await fetch(`${API_URL_CREATE}products/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(value),
    });
    if (res.ok) {
      router.push("/dashboard");
    }

    const data = await res.json();

    console.log("product uploaded: ", data);
  };

  return (
    <main className="my-10">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          // upload file icon
          const fileIcon = values.fileIcon;
          const categoryIcon = await handleUpload(
            fileIcon,
            values.categoryName,
            "category"
          );

          // upload file product
          const fileProduct = values.fileProduct;
          const productImage = await handleUpload(
            fileProduct,
            values.name,
            "product"
          );

          // create product post
          const productPost: ProductType = {
            category: {
              name: values.categoryName,
              icon: categoryIcon,
            },
            name: values.name,
            desc: values.desc,
            image: productImage,
            price: values.price,
            quantity: values.quantity,
          };

          // post product
          handleSubmitProduct(productPost);
        }}
      >
        {({ setFieldValue }) => (
          <Form className="w-[300px] xl:w-[700px] md:w-[500px] sm:w-[300px] mx-auto p-4 bg-white shadow-md rounded">
            <section className="px-6">
              <h1 className="text-2xl mb-4 text-center font-bold">
                Create Product
              </h1>
              {/* Product Name */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product Name
                </label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 p-2 border rounded w-full"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 mt-1 text-sm"
                />
              </div>

              {/* Product Description */}
              <div className="mb-4">
                <label
                  htmlFor="desc"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product Description
                </label>
                <Field
                  type="text"
                  name="desc"
                  id="desc"
                  component="textarea"
                  className="mt-1 p-2 border rounded w-full"
                />
                <ErrorMessage
                  name="desc"
                  component="div"
                  className="text-red-500 mt-1 text-sm"
                />
              </div>

              {/* Product Price */}
              <div className="mb-4">
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product Price
                </label>
                <Field
                  type="number"
                  name="price"
                  id="price"
                  className="mt-1 p-2 border rounded w-full"
                />
                <ErrorMessage
                  name="price"
                  component="div"
                  className="text-red-500 mt-1 text-sm"
                />
              </div>

              {/* Product Quantity */}
              <div className="mb-4">
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product Quantity
                </label>
                <Field
                  type="number"
                  name="quantity"
                  id="quantity"
                  className="mt-1 p-2 border rounded w-full"
                />
                <ErrorMessage
                  name="quantity"
                  component="div"
                  className="text-red-500 mt-1 text-sm"
                />
              </div>

              {/* Product Category */}
              <div className="mb-4">
                <label
                  htmlFor="categoryName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product Category Name
                </label>
                <Field
                  type="text"
                  name="categoryName"
                  id="categoryName"
                  className="mt-1 p-2 border rounded w-full"
                />
                <ErrorMessage
                  name="categoryName"
                  component="div"
                  className="text-red-500 mt-1 text-sm"
                />
              </div>
            </section>

            <section className="flex flex-col items-start px-6">
              {/* Product Category Icon*/}
              <div className="mb-4 flex flex-col p">
                <label
                  htmlFor="fileIcon"
                  className="block text-sm font-medium text-gray-700 my-2"
                >
                  Product Category Icon
                </label>
                <Field
                  type="file"
                  name="fileIcon"
                  id="fileIcon"
                  component={CustomInput}
                  setFieldValue={setFieldValue}
                  className="mt-1"
                />
                <ErrorMessage
                  name="fileIcon"
                  component="div"
                  className="text-red-500 mt-1 text-sm"
                />
              </div>

              {/* Product Image*/}
              <div className="mb-4">
                <label
                  htmlFor="fileProduct"
                  className="block text-sm font-medium text-gray-700 my-2"
                >
                  Product Image
                </label>
                <Field
                  type="file"
                  name="fileProduct"
                  id="fileProduct"
                  component={CustomInput}
                  setFieldValue={setFieldValue}
                  className="mt-1"
                />
                <ErrorMessage
                  name="fileProduct"
                  component="div"
                  className="text-red-500 mt-1 text-sm"
                />
              </div>
            </section>

            {/* button submit */}

            <div className="flex flex-row px-6">
              <div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Submit
                </button>
              </div>

              <div className="ml-4">
                <button
                  onClick={() => router.push(`/dashboard`)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Cancel
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </main>
  );
}
