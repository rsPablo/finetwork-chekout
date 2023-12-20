import { memo } from "react";
import useProducts from "../../hook/useProducts";
import ProductsCard from "../../components/ProductCard/ProductsCard";
import Loader from "../../components/Loader";

const HomePage = () => {
  const { listProducts, loading } = useProducts();
  return (
    <div>
      {!loading ? <ProductsCard listProducts={listProducts} /> : <Loader />}
    </div>
  );
};

export default memo(HomePage);
