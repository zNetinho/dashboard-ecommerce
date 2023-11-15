import Footer from "../layout/Footer";
import Header from "../layout/Header";

export default function PageDefault({ children }: any) {
    return (
    // <body className="h-screen dark:bg-slate-800">
        <>
            <nav className="h-[100px] border-b border-b-[#5CCFF1]">
                <Header />
            </nav>
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
