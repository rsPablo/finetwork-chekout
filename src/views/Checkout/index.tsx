import { Button, H3 } from "@finetwork/ui";
import "./styles.scss";
import Promotion from "./Promotion";
import OrderSummary from "./OrderSummary";
import useLogic from "./logic";
import MyForm from "./FormUser";
const Checkout = () => {
  const {
    description,
    name,
    promotion,
    setPromotion,
    webInfo,
    promotions,
    setShowForm,
    showForm,
    price,
    handleSubmit,
    formikRef,
  } = useLogic();

  return (
    <>
      <article className="checkout-container">
        <H3>¡Comenzamos tu pedido!</H3>
        <div className="separator" />
        <Promotion
          description={description}
          name={name}
          promotion={promotion}
          promotions={promotions}
          setPromotion={setPromotion}
          webInfo={webInfo}
        />
        <Button
          css={{ width: "50px" }}
          kind="primary"
          onClick={() => setShowForm(true)}
        >
          Continuar
        </Button>
        {showForm && (
          <>
            <div className="separator" />
            <MyForm formRef={formikRef} />
            <div className="separator" />
            <OrderSummary
              promotion={promotion}
              price={price}
              handleSubmit={handleSubmit}
            />
          </>
        )}
      </article>
    </>
  );
};

export default Checkout;
