import {
  Button,
  H2,
  H4,
  Paragraph2,
  Paragraph3,
  Paragraph5,
  Paragraph6,
} from "@finetwork/ui";
import "./styles.scss";
import { useMemo, useState } from "react";
const OrderSummary = ({
  promotion,
  price,
}: {
  promotion: number;
  price: number;
}) => {
  const [follow, setFollow] = useState<boolean>(false);
  const priceString = useMemo(() => {
    return price.toFixed(2).replace(".", "'");
  }, [price]);

  const total = useMemo(() => {
    if (promotion === 1) {
      const result = price + 96.8;
      return result.toFixed(2).replace(".", "'");
    } else if (promotion === 0) {
      return priceString;
    }
  }, [promotion]);
  return (
    <>
      <H4 css={{ fontFamily: "Druk sans" }}>03. Resumen de tu pedido</H4>
      <div className="summary-container">
        <H4>Tu Tarifa</H4>
        <div className="row">
          <Paragraph5 css={{ fontFamily: "Druk sans" }}>
            Fibra 300Mbps
          </Paragraph5>
          <Paragraph2 css={{ fontFamily: "Druk sans" }}>
            {priceString}€
          </Paragraph2>
        </div>
        <Paragraph5 css={{ fontFamily: "Druk sans" }}>
          10GB + Ilimitadas
        </Paragraph5>
        {promotion === 0 && (
          <div className="row">
            <Paragraph6 css={{ fontFamily: "Druk sans" }}>
              Permanencia
            </Paragraph6>
            <Paragraph6 css={{ fontFamily: "Druk sans", color: "green" }}>
              3 Meses
            </Paragraph6>
          </div>
        )}
      </div>
      <div className="separator" />
      <div className="summary-container">
        <H4>El primer mes pagarás</H4>
        <div className="row">
          <Paragraph5 css={{ fontFamily: "Druk sans" }}>
            Envió y Activación de SIM
          </Paragraph5>
          <Paragraph5 css={{ fontFamily: "Druk sans", color: "green" }}>
            0.00€
          </Paragraph5>
        </div>
        <div className="row">
          <Paragraph5 css={{ fontFamily: "Druk sans" }}>Instalación</Paragraph5>
          <Paragraph5 css={{ fontFamily: "Druk sans" }}>96.80€</Paragraph5>
        </div>
        {promotion === 0 && (
          <div className="row">
            <Paragraph5 css={{ fontFamily: "Druk sans" }}>
              Descuento de Instalación
            </Paragraph5>
            <Paragraph5 css={{ fontFamily: "Druk sans", color: "green" }}>
              - 96.80€
            </Paragraph5>
          </div>
        )}
        <div style={{ display: "flex", justifyContent: "end" }}>
          <H2 css={{ fontFamily: "Druk sans" }}>{total}€</H2>
        </div>
      </div>
      <div className="separator" />
      <div className="summary-container">
        <div className="row">
          <Paragraph3 css={{ fontFamily: "Druk sans" }}>
            Todos los meses pagarás
          </Paragraph3>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div>
              <Paragraph6>TOTAL </Paragraph6>
              <Paragraph6>IVA incluido</Paragraph6>
            </div>
            <H2 css={{ fontFamily: "Druk sans" }}>{priceString}€</H2>
          </div>
        </div>
      </div>
      <div className="separator" />
      <div className="terms-container ">
        <div className="terms">
          <input
            type="checkbox"
            onChange={() => setFollow(!follow)}
            checked={follow}
          />
          <label>
            He leído y acepto los costes y la nuevas condiciones asociadas al
            cambio de tarfia, módulo de ahorro y/o promoción, así como la
            política de desentimiento, y solicito que los servicios comiencen a
            presentarse en el siguiente ciclo de facturación.
          </label>
        </div>
        <Button
          css={{ width: "50px" }}
          kind={follow ? "primary" : "secondary"}
          className={follow ? "submit-button" : "submit-button__disabled"}
        >
          <label>Aceptar y continuar tarifa</label>
        </Button>
      </div>
    </>
  );
};

export default OrderSummary;
