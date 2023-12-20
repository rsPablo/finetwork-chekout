import { useRef, useState } from "react";
import data from "../../data/product.json";
import { FormikValues } from "formik";

const useLogic = () => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [promotion, setPromotion] = useState<number>(1);
  const { name, description } = data.webInfo;
  const formikRef = useRef<FormikValues | null>(null);

  const handleSubmit = () => {
    if (formikRef.current) {
      formikRef.current.submitForm();
    }
  };

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
    handleSubmit,
    formikRef,
  };
};

export default useLogic;
