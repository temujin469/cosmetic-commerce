import Head from "next/head";
import React, { FC } from "react";
import { Toaster } from "react-hot-toast";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface Props {
  title?: string | string[];
  children: any;
}

const Layout: FC<Props> = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{title ? title : "online-shop"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen max-h-screen flex flex-col justify-between bg-gray-100 overflow-y-scroll">
        <header>
          <Navbar />
        </header>
        <main className="m-auto w-full mt-16 md:mt-20">
          <Toaster/>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default Layout;
