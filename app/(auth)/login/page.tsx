"use client";

import React, { useState } from "react";
import style from "./style.module.css";
import { IoEyeOffSharp } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { signIn, useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { API_URL_LOGIN } from "@/lib/definitions";
import next from "next";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectToken, setAccessToken } from "@/redux/features/auth/authSlice";
import email from "next-auth/providers/email";
type ValueTypes = {
  email: string;
  password: string;
};

const initialValues: ValueTypes = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const accessToken = useAppSelector(selectToken);

  const [user, setUser] = useState(null);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
    // Toggle password visibility
  };

  //  handle submit
  const handleSubmit = async () => {
    const email = "";
    const password = "";
    fetch(API_URL_LOGIN, {
      method: "POST",
      headers: {
  
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        dispatch(setAccessToken(data.accessToken));
        setUser(data.user);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  // console.log("Access Token", accessToken);

  // const handleLogin = async () => {
  //   const email = "sanhpanha3003@gmail.com";
  //   const password = "Panha12345";

  //   fetch(process.env.NEXT_PUBLIC_API_URL + "/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ email, password }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("Data with JWT:", data);
  //       setAccessToken(data.accessToken);
  //       setUser(data.user);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  if (loading) {
    return (
      <div className={`${style.container}`}>
        <h1 className="text-6xl text-center">Loading...</h1>
      </div>
    );
  }

  if (!session) {
    return (
      <main className=" flex justify-center">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="flex flex-col bg-orange-50 px-4 py-8 rounded w-96 shadow-xl border">
            <div className="flex justify-center">
              <img
                src="https://img.favpng.com/6/5/12/ecommerce-logo-png-favpng-c9XwFQHwsmZeVNHU6BRWQgabB.jpg"
                className="mr-3 h-8 rounded-2xl"
              />

              <span className="self-center whitespace-nowrap text-xl font-bold text-black tracking-[.25em]">
                E-Shopping
              </span>
            </div>
            <h1 className={`${style.title} py-6`}>
              Welcome to our Productions
            </h1>
            {/* Email */}
            <div className="mb-5">
              <label className={`${style.label}`} htmlFor="email">
                Email
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                className={`${style.input}`}
                placeholder="example@gmail.com"
              />
              <ErrorMessage
                name="email"
                component="section"
                className={`${style.error}`}
              />
            </div>

            {/* Password */}
            <div className="mb-5">
              <label className={`${style.label}`} htmlFor="password">
                Password
              </label>
              <div className="relative">
                <Field
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="password"
                  className={`${style.input}`}
                />
                {!showPassword ? (
                  <IoEyeOffSharp
                    onClick={() => handleShowPassword()}
                    className="cursor-pointer absolute right-2 top-4"
                  />
                ) : (
                  <IoEyeSharp
                    onClick={() => handleShowPassword()}
                    className="cursor-pointer absolute right-2 top-4"
                  />
                )}
              </div>
              <ErrorMessage
                name="password"
                component="section"
                className={`${style.error}`}
              />
            </div>

            {/* button submit */}
            <button
              type="submit"
              // onClick={() => router.push("/")}
              className={`${style.button}`}
              onClick={handleSubmit}
            >
              Login
            </button>

            <div className="flex justify-center items-center gap-4 my-3">
              <button
                className="bg-none border-gray-300 border py-2 px-14 rounded-xl mb-2 hover:bg-gray-200"
                onClick={() => {
                  signIn("google");
                }}
              >
                <img
                  src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png"
                  className="w-6 h-6"
                />
              </button>
              <button
                className="bg-none border-gray-300 border py-2 px-14 rounded-xl mb-2 hover:bg-gray-200"
                onClick={() => {
                  signIn("github");
                }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  className="w-6 h-6"
                />
              </button>
            </div>

            <div onClick={() => router.push("/register")}>
              <p className="text-center underline">Do not have an account?</p>
            </div>
          </Form>
        </Formik>
      </main>
    );
  }

  if (session) {
    return router.push("/");
  }
}
