import { useState } from "react";
import data from "../../data/product.json";

const useLogic = () => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [promotion, setPromotion] = useState<number>(1);
  const { name, description } = data.webInfo;

  return {
    showForm,
    setShowForm,
    promotion,
    setPromotion,
    name,
    description,
    webInfo: data.webInfo,
    price: data.prices[0].price,
    promotions: data.promotions,
  };
};

export default useLogic;
