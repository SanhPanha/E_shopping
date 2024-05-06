"use client";
import SideBarComponent from "@/components/sidebar/SideBarComponent";
import { MenuIcon } from "@/components/icon/FontAwesome";
import "@/app/globals.css";
import { useState } from "react";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const [isShowSideBar, setIsShowSideBar] = useState<boolean>(true);
  console.log("isShowSideBar", isShowSideBar);
  return (
    <html>
      <body className="flex none-scroll-bar overflow-x-auto bg-gray-300">
        <MenuIcon
          onClick={() => setIsShowSideBar(!isShowSideBar)} 
          classname="h-8 w-8 fixed top-0 m-4 cursor-pointer lg:hidden"
        />
        <aside
          className={`sticky left-0 z-10 h-screen ${
            isShowSideBar && "hidden"
          } lg:block`}
        >
          <SideBarComponent />
        </aside>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}


