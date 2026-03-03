import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <ScrollToTop />
        </>
    );
}
