import { memo } from "react";
import useProducts from "../../hook/useProducts";
import ProductsCard from "../../components/ProductCard/ProductsCard";

const HomePage = () => {
  const { listProducts } = useProducts();
  return (
    <div>
      <ProductsCard listProducts={listProducts} />
    </div>
  );
};

export default memo(HomePage);
