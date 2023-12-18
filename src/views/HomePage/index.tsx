import { memo } from "react";
import Header from "../../components/Header";
import useProducts from "../../hook/useProducts";
import ProductsCard from "../../components/ProductCard/ProductsCard";

const HomePage = () => {
  const { listProducts } = useProducts();
  return (
    <div>
      <Header />
      <ProductsCard listProducts={listProducts} />
      <section></section>
      <footer></footer>
    </div>
  );
};

export default memo(HomePage);
