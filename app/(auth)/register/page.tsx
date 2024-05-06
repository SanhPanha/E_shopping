"use client";

import React, { useState } from "react";
import style from "./style.module.css";

import { IoEyeOffSharp } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { BASE_URL } from "@/lib/definitions";
import { useRouter } from "next/navigation";
type ValueTypes = {
  email: string;
  password1: string;
  password2: string;
  first_name: string;
  last_name: string;
};

const initialValues: ValueTypes = {
  email: "",
  password1: "",
  password2: "",
  first_name: "",
  last_name: "",
};

// 1- At least one upper case English letter, (?=.*[A-Z])
// 2- At least one lower case English letter, (?=.*[a-z])
// 3- At least one digit, (?=.*\d)
// 4- At least one special character, (?=.*[@#$%^&*])
const strongPasswordRegex = new RegExp(
  "^(?=.*[A-Z])(?=.*[a-z])(?=.*d)(?=.*[@#$%^&*]).{8,}$"
);

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password1: Yup.string()
    .min(8, "Password is too short, At lease 8 characters")
    // .matches(
    //   strongPasswordRegex,
    //   "Password must contain at least one upper case English letter, one lower case English letter, one digit and one special character"
    // )
    .required("Required"),
  password2: Yup.string()
    .oneOf([Yup.ref("password1")], "Passwords must match")
    .required("Required"),
  first_name: Yup.string().required("Required"),
  last_name: Yup.string().required("Required"),
});

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
    
    // Toggle password visibility
  };

  //  handle submit
  const handleSubmit = (values: ValueTypes) => {
    setLoading(true);
    fetch(`${BASE_URL}/api/user/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <div className={`${style.container}`}>
        <h1 className="text-6xl text-center">Loading...</h1>
      </div>
    );
  }

  return (
    <main className=" flex justify-center my-4">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          handleSubmit(values);
        }}
      >
        <Form className="flex flex-col bg-orange-50 p-4 rounded w-96 shadow-xl border gap-2">
          <div className="flex justify-center">
            <img
              src="https://img.favpng.com/6/5/12/ecommerce-logo-png-favpng-c9XwFQHwsmZeVNHU6BRWQgabB.jpg"
              className="mr-3 h-8 rounded-2xl"
            />

            <span className="self-center whitespace-nowrap text-xl font-bold text-black tracking-[.25em]">
              E-Shopping
            </span>
          </div>
          <h1 className={`${style.title} py-3`}>Create New Account</h1>
          {/* Email */}
          <div >
            <label className={`${style.label}`} htmlFor="email">
              Email
            </label>
            
            <Field
              type="email"
              name="email"
              id="email"
              className={`${style.input}`}
            />
            <ErrorMessage
              name="email"
              component="section"
              className={`${style.error}`}
            />
            
          </div>

          {/* First Name */}
          <div>
            <label className={`${style.label}`} htmlFor="first_name">
              First Name
            </label>
            <Field
              type="text"
              name="first_name"
              id="first_name"
              className={`${style.input}`}
            />
            <ErrorMessage
              name="first_name"
              component="section"
              className={`${style.error}`}
            />
          </div>

          {/* Last Name */}
          <div >
            <label className={`${style.label}`} htmlFor="last_name">
              Last Name
            </label>
            <Field
              type="text"
              name="last_name"
              id="last_name"
              className={`${style.input}`}
            />
            <ErrorMessage
              name="last_name"
              component="section"
              className={`${style.error}`}
            />
          </div>

          {/* Password1 */}
          <div >
            <label className={`${style.label}`} htmlFor="password1">
              Password
            </label>
            <div className="relative">
              <Field
                type={showPassword ? "text" : "password"}
                name="password1"
                id="password1"
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
              name="password1"
              component="section"
              className={`${style.error}`}
            />
          </div>

          {/* Password2 */}
          <div >
            <label className={`${style.label}`} htmlFor="password2">
              Confirmed Password
            </label>
            <div className="relative">
              <Field
                type={showPassword ? "text" : "password"}
                name="password2"
                id="password2"
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
              name="password2"
              component="section"
              className={`${style.error}`}
            />
          </div>

          {/* button submit */}
          <button type="submit" className={`${style.button} my-2`}>
            Create Account
          </button>

          <div onClick={() => router.push("/login")}>
              <p className="text-center underline">Already have an account?</p>
            </div>
        </Form>
      </Formik>
    </main>
  );
}
