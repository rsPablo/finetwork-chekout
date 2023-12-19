import { FC } from "react";
import ProductCard from ".";
import "./styles.scss";

const ProductsCard: FC<{
  listProducts: { displayName: string; price: string }[] | undefined;
}> = ({ listProducts }) => {
  return (
    <div className="products-container">
      {listProducts?.map((el) => {
        return <ProductCard displayName={el.displayName} price={el.price} />;
      })}
    </div>
  );
};

export default ProductsCard;
