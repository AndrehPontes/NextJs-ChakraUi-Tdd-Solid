import { ReactNode } from "react";
import Footer from "./footer/footer";

import Navbar from "./navbar/navbar";

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />      
    </>
  );
};

export default Layout;