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
      <H4>03. Resumen de tu pedido</H4>
      <div className="summary-container">
        <H4>Tu Tarifa</H4>
        <div className="row">
          <Paragraph5 css={{ fontWeight: "bold" }}>Fibra 300Mbps</Paragraph5>
          <Paragraph2 css={{ fontWeight: "bold" }}>{priceString}€</Paragraph2>
        </div>
        <Paragraph5 css={{ fontWeight: "bold" }}>10GB + Ilimitadas</Paragraph5>
        {promotion === 0 && (
          <div className="row">
            <Paragraph6 css={{ fontWeight: "bold" }}>Permanencia</Paragraph6>
            <Paragraph6 css={{ fontWeight: "bold", color: "green" }}>
              3 Meses
            </Paragraph6>
          </div>
        )}
      </div>
      <div className="separator" />
      <div className="summary-container">
        <H4>El primer mes pagarás</H4>
        <div className="row">
          <Paragraph5 css={{ fontWeight: "bold" }}>
            Envió y Activación de SIM
          </Paragraph5>
          <Paragraph5 css={{ fontWeight: "bold", color: "green" }}>
            0.00€
          </Paragraph5>
        </div>
        <div className="row">
          <Paragraph5 css={{ fontWeight: "bold" }}>Instalación</Paragraph5>
          <Paragraph5 css={{ fontWeight: "bold" }}>96.80€</Paragraph5>
        </div>
        {promotion === 0 && (
          <div className="row">
            <Paragraph5 css={{ fontWeight: "bold" }}>
              Descuento de Instalación
            </Paragraph5>
            <Paragraph5 css={{ fontWeight: "bold", color: "green" }}>
              - 96.80€
            </Paragraph5>
          </div>
        )}
        <div style={{ display: "flex", justifyContent: "end" }}>
          <H2>{total}€</H2>
        </div>
      </div>
      <div className="separator" />
      <div className="summary-container">
        <div className="row">
          <Paragraph3 css={{ fontWeight: "bold" }}>
            Todos los meses pagarás
          </Paragraph3>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div>
              <Paragraph6>TOTAL </Paragraph6>
              <Paragraph6>IVA incluido</Paragraph6>
            </div>
            <H2>{priceString}€</H2>
          </div>
        </div>
      </div>
      <div className="separator" />
      <div className="terms-container ">
        <div className="terms">
          <input
            type="checkbox"
            onClick={() => setFollow(!follow)}
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
