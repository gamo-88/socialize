import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeContextProvider } from "@/context/ThemeContext";
import Navbar from "@/components/layouts/Navbar";
import SideBar from "@/components/layouts/SideBar";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <body className={`antialiased`}>
        <ThemeContextProvider>
          <Navbar/>
            <section className="bg-colorBackgroundBody overflow-hidden flex items-start py-4 px-4 md:px-4 lg:px-14 xl:px-20 2xl:px-20   ">
              <div className="hidden lg:block">
                <SideBar/>
              </div> 
                <main className=" w-full overflow-hidden">
                  {children}
                </main>

            </section>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
