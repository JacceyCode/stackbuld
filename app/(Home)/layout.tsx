import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="bg-white min-h-screen flex justify-between flex-col">
      <Header />
      {children}
      <Footer />
    </section>
  );
};

export default Layout;
