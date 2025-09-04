import Header from "../../components/header";
import Footer from "../../components/footer";
import ProductGrid from "../../components/product-grid";
import ContactFloat from "../../components/contact";
export default function () {
  return (
    <>
      <div className="">
        <Header />
        {/* <Hero /> */}
        <ProductGrid />
        <Footer />
        <ContactFloat />
      </div>
    </>
  );
}
