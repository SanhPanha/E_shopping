import { Suspense } from "react";
import "@/app/globals.css";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { Metadata } from "next";
import FooterComponent from "@/components/footer/FooterComponent";
import StoreProvider from "../StoreProvider";
import SessionProvider  from "../SessionProvider";
import Error from "../(user)/error";
import Loading from "../(user)/loading";

export const metadata: Metadata = {
  title: "ISTAD E-Commerce Web",
  description: "We provide the best quality products for you.",
  openGraph: {
    title: "ISTAD E-Commerce Web",
    description: "We provide the best quality products for you.",
    images:
      "https://www.khmertimeskh.com/wp-content/uploads/2022/07/dreamstime_m_20795008118952.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-300">
      <SessionProvider>
        <body className="h-screen bg-gray-200 flex flex-col justify-between">
          <StoreProvider>
            <header>
              <NavbarComponent />
            </header>
            <main>
              <ErrorBoundary errorComponent={Error}>
                <Suspense fallback={<Loading />}>{children}</Suspense>
              </ErrorBoundary>
            </main>

            <footer>
              <FooterComponent />
            </footer>
          </StoreProvider>
        </body>
      </SessionProvider>
    </html>
  );
}
