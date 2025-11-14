import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC<any> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-6">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

