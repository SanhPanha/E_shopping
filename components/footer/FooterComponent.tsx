import {
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { FaTelegram, FaYoutube } from "react-icons/fa6";

export default function FooterComponent() {
  return (
    <Footer className="w-full bg-gray-100 shadow-top  p-6">
      <section className="w-full grid container mx-auto">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <img
              src="https://img.favpng.com/6/5/12/ecommerce-logo-png-favpng-c9XwFQHwsmZeVNHU6BRWQgabB.jpg"
              className="w-24 rounded-3xl"
            />
            <p className="text-black text-xl mt-2">
              Your One-Stop E-Commerce Destination!
            </p>
          </div>

          <div>
            <FooterTitle className="text-black" title="Find more" />
            <FooterLinkGroup col className="text-black">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/policy">Privacy Policy</FooterLink>
            </FooterLinkGroup>
          </div>

          <div>
            <FooterTitle className="text-black" title="Contact us" />
            <FooterLinkGroup col className="text-black">
              <FooterLink href="#">(+855) 95-990-910</FooterLink>
              <FooterLink href="#">(+855) 93-990-910</FooterLink>
            </FooterLinkGroup>
          </div>

          <div>
            <FooterTitle className="text-black" title="Follow us" />
            <FooterLinkGroup col>
              <div className="flex flex-col justify-between gap-4">
                <div className="flex items-center gap-1">
                  <FaTelegram />
                  <span>Telegram</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaYoutube />
                  <span>Youtube</span>
                </div>
              </div>
            </FooterLinkGroup>
          </div>
        </div>

        <FooterDivider className="border-gray-500"/>

        <div className="w-full grid place-content-center sm:items-center">
          <FooterCopyright
            className="text-black"
            by="E-Shopping | All Rights Reserved™"
            year={2024}
          />
        </div>
      </section>
    </Footer>
  );
}
