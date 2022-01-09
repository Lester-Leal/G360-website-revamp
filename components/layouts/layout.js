import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("../modules/navbar"));
const Footer = dynamic(() => import("../modules/footer"));

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <div
      style={{
        height: "100%",
        backgroundColor: "transparent",
        position: "relative",
      }}
    >
      {<Navbar />}
      {children}
      {<Footer />}
    </div>
  );
};

export default Layout;
