"use client";
import { useState } from "react";
import Breadcrumb from "../Breadcrumb";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

export default function PageDefault({ children }: any) {

    console.log();
    return (
    // <body className="h-screen dark:bg-slate-800">
        <>
            <nav className="h-[100px] border-b border-b-[#5CCFF1]">
                <Header />
            </nav>
            <div>
                {/* <Breadcrumb /> */}
            </div>
            <section className="h-auto flex">
                {children}
            </section>
            <section className="w-full absolute h-[200px]">
                <Footer />
            </section>
        </>
    // </body>
    );
}
