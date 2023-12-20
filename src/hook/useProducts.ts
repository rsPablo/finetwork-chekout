import { useEffect, useMemo, useState } from "react";
import { OfferingProducts } from "../model/OfferingProducts";

const useProducts = () => {
  const [response, setResponse] = useState<OfferingProducts>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const productsFetch = async () => {
      try {
        const response = await fetch(
          "https://gateway.finetwork.com/product/offering/products?page=2&size=3"
        );
        const products: OfferingProducts = await response.json();
        setResponse(products);
      } finally {
        setLoading(false);
      }
    };
    productsFetch();
  }, []);

  const listProducts = useMemo(() => {
    return response?._embedded.products.map((product) => {
      return {
        displayName: product.displayName || "",
        price: product.prices[0].price.toFixed(1).replace(".", "'"),
      };
    });
  }, [response]);

  return {
    listProducts,
    loading,
  };
};

export default useProducts;
