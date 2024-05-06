"use client";
import Link from "next/link";
import React from "react";
import { signIn, useSession, signOut } from "next-auth/react";
import Image from "next/image";

import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { MenuList } from "./menu";
import { customize } from "../customize";
import { useAppSelector } from "@/redux/hooks";

type MenuItem = {
  name: string;
  path: string;
  active: boolean;
};

export default function NavbarComponent() {
  const pathname = usePathname();
  const [menu, setMenu] = useState<MenuItem[]>(MenuList);
  const count = useAppSelector((state) => state.cart.value);
  const router = useRouter();
  const { data: session } = useSession();
  const [isShowLogout, setIsShowLogout] = useState<boolean>(false);

  const handleLogout = () => {
    setIsShowLogout(true);
  };

  if (session) {
    return (
      <Navbar
        theme={customize.navbar}
        fluid
        rounded
        className="w-full bg-gray-100 flex items-center justify-center py-6 shadow-md relative"
      >
        <NavbarBrand as={Link} href="/" className="px-6 md:absolute left-8">
          <img
            src="https://img.favpng.com/6/5/12/ecommerce-logo-png-favpng-c9XwFQHwsmZeVNHU6BRWQgabB.jpg"
            className="mr-3 h-8 rounded-2xl"
          />

          <span className="self-center whitespace-nowrap text-xl font-bold text-black tracking-[.25em]">
            E-Shopping
          </span>
        </NavbarBrand>

        <NavbarToggle className="text-black border-0 sm:left-0 delay-75 grid justify-center" />

        <NavbarCollapse>
          {menu.map((item, index) => (
            <NavbarLink
              key={index}
              as={Link}
              href={item.path}
              active={item.path === pathname}
              className="text-black text-md font-semibold mx-auto px-6"
            >
              {item.name}
            </NavbarLink>
          ))}
          <section className="hidden md:flex px-6 md:absolute right-8 py-3 md:p-0 bottom-1 ">
            <div className="relative" onClick={() => router.push("/cart")}>
              <p className="bg-orange-400 px-1 absolute bottom-9 right-6 rounded text-gray-50">
                {count}
              </p>
              <img
                src="https://i.pinimg.com/736x/f2/12/4e/f2124e83e9fd8ddeb31ac7cdb59f544c.jpg"
                className="mr-3 w-16 rounded-2xl"
              />
            </div>

            <div onClick={handleLogout} >
              <Image
                src={session?.user?.image || (session?.user?.name as string)}
                alt=""
                width={40}
                height={40}
                className="rounded-full mt-3"
              />
            </div>
          </section>
          <section
            
            className="flex md:hidden px-6 md:absolute right-8 py-3 md:p-0 bottom-1"
          >
            <div onClick={handleLogout}>
              <Image
                src={session?.user?.image || (session?.user?.name as string)}
                alt=""
                width={40}
                height={40}
                className="rounded-full mt-3"
              />
            </div>

            <div className="relative" onClick={() => router.push("/cart")}>
              <p className="bg-orange-400 px-1 absolute bottom-9 right-3 rounded text-gray-50">
                {count}
              </p>
              <img
                src="https://i.pinimg.com/736x/f2/12/4e/f2124e83e9fd8ddeb31ac7cdb59f544c.jpg"
                className="ml-3 mt-1 w-16 rounded-2xl"
              />
            </div>
          </section>

          {isShowLogout && (
            <section className="flex flex-col gap-2 px-6 md:absolute right-8 py-3 md:p-0 top-20">
              <p className="text-orange-300">{session.user?.email}</p>
              <div
                onClick={() => signOut()}
                className="flex gap-3 hover:bg-gray-300 px-4 py-1 rounded"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-6"
                >
                  <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" />
                </svg>

                <p className="text-gray-500">Logout</p>
              </div>
            </section>
          )}
        </NavbarCollapse>
      </Navbar>
    );
  }
  return (
    <Navbar
      theme={customize.navbar}
      fluid
      rounded
      className="w-full bg-gray-100 flex items-center justify-center py-6 shadow-md relative"
    >
      <NavbarBrand as={Link} href="/" className="px-6 md:absolute left-8">
        <img
          src="https://img.favpng.com/6/5/12/ecommerce-logo-png-favpng-c9XwFQHwsmZeVNHU6BRWQgabB.jpg"
          className="mr-3 h-8 rounded-2xl"
        />

        <span className="self-center whitespace-nowrap text-xl font-bold text-black tracking-[.25em]">
          E-Shopping
        </span>
      </NavbarBrand>

      <NavbarToggle className="text-black border-0 sm:left-0 delay-75 grid justify-center" />

      <NavbarCollapse>
        {menu.map((item, index) => (
          <NavbarLink
            key={index}
            as={Link}
            href={item.path}
            active={item.path === pathname}
            className="text-black text-md font-semibold mx-auto px-6"
          >
            {item.name}
          </NavbarLink>
        ))}

        <section className="hidden md:flex px-6 md:absolute right-8 py-3 md:p-0 bottom-1 ">
          <div className="relative" onClick={() => router.push("/cart")}>
            <p className="bg-orange-400 px-1 absolute bottom-9 right-6 rounded text-gray-50">
              {count}
            </p>
            <img
              src="https://i.pinimg.com/736x/f2/12/4e/f2124e83e9fd8ddeb31ac7cdb59f544c.jpg"
              className="mr-3 w-16 rounded-2xl"
            />
          </div>

          <div onClick={() => router.push("/login")}>
            <button className="text-gray-50 text-md font-semibold bg-orange-400 px-4 py-2 mt-4 rounded-lg hover:bg-orange-500 ">
              Login
            </button>
          </div>
        </section>

        <section className="flex md:hidden px-6 md:absolute right-8 py-3 md:p-0 bottom-1">
          <div onClick={() => router.push("/login")}>
            <button className="text-gray-50 text-md font-semibold bg-orange-400 px-4 py-2 mt-4 rounded-lg hover:bg-orange-500 ">
              Login
            </button>
          </div>

          <div className="relative" onClick={() => router.push("/cart")}>
            <p className="bg-orange-400 px-1 absolute bottom-9 right-3 rounded text-gray-50">
              {count}
            </p>
            <img
              src="https://i.pinimg.com/736x/f2/12/4e/f2124e83e9fd8ddeb31ac7cdb59f544c.jpg"
              className="ml-3 mt-1 w-16 rounded-2xl"
            />
          </div>
        </section>
      </NavbarCollapse>
    </Navbar>
  );
}
