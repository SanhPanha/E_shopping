import type { CustomFlowbiteTheme } from "flowbite-react";
export const customize: CustomFlowbiteTheme = {
  navbar: {
    root: {
      base: "bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4",
      rounded: {
        on: "rounded",
        off: "",
      },
      bordered: {
        on: "border",
        off: "",
      },
      inner: {
        base: "mx-auto flex flex-wrap items-center justify-between",
        fluid: {
          on: "",
          off: "container",
        },
      },
    },
    brand: {
      base: "flex items-center ",
    },
    collapse: {
      base: "w-full md:block md:w-auto ",
      list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium ",
      hidden: {
        on: "hidden",
        off: "",
      },
    },
    link: {
      base: "block py-2 pl-3 pr-4 md:p-0",
      active: {
        on: " text-white md:text-orange-300 border-b border-black",
        off: "border-b border-gray-100  text-gray-700 md:border-0 md:hover:bg-transparent md:hover:text-orange-500 border-b border-black",
      },
      disabled: {
        on: "text-gray-400 hover:cursor-not-allowed ",
        off: "",
      },
    },
    toggle: {
      base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 md:hidden",
      icon: "h-6 w-6 shrink-0",
      
    },
  },
};
