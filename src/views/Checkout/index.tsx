import { FC, memo } from "react";
import {
  Button,
  H2,
  H3,
  H4,
  Paragraph2,
  Paragraph3,
  Paragraph4,
  Paragraph5,
  Paragraph6,
} from "@finetwork/ui";
import { CheckIcon } from "@finetwork/ui";
import data from "../../data/product.json";
import "./styles.scss";
import FormUser from "../../components/FormUser";
const Checkout: FC = () => {
  const { name, description } = data.webInfo;
  return (
    <article className="checkout-container">
      <H3>¡Comenzamos tu pedido!</H3>
      <div className="separator"></div>
      <H4>01. Configura tu tarifa</H4>
      <H3>{name}</H3>
      <div className="separator__purple" />
      <Paragraph4>{description}</Paragraph4>
      <div className="features">
        {data.webInfo.features.map((el) => {
          return (
            <Paragraph5>
              <CheckIcon /> {el}
            </Paragraph5>
          );
        })}
      </div>
      <Paragraph4>Elige la promición que quieras usar en tu tarifa</Paragraph4>
      <div className="promotion-container">
        {data.promotions.map((el) => {
          return (
            <div className="promotion-card">
              <Paragraph5 className="promotion-card__uppercase">
                {el.name}
              </Paragraph5>
              <Paragraph5 css={{ fontWeight: "bold" }}>
                {el.description}
              </Paragraph5>
            </div>
          );
        })}
      </div>
      <Button css={{ width: "50px" }} kind="primary">
        Continuar
      </Button>
      <div className="separator"></div>
      <H4>02. Titular del contrato</H4>
      <FormUser />
      <div className="separator"></div>
      <H4>03. Resumen de tu pedido</H4>
      <div className="summary-container">
        <H4>Tu Tarifa</H4>
        <div className="row">
          <Paragraph5 css={{ fontWeight: "bold" }}>Fibra 300Mbps</Paragraph5>
          <Paragraph2 css={{ fontWeight: "bold" }}>29'90€</Paragraph2>
        </div>
        <Paragraph5 css={{ fontWeight: "bold" }}>10GB + Ilimitadas</Paragraph5>
        <div className="row">
          <Paragraph6 css={{ fontWeight: "bold" }}>Permanencia</Paragraph6>
          <Paragraph6 css={{ fontWeight: "bold", color: "green" }}>
            3 Meses
          </Paragraph6>
        </div>
      </div>
      <div className="separator" />
      <div className="summary-container">
        <H4>El primer pagarás</H4>
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
        <div className="row">
          <Paragraph5 css={{ fontWeight: "bold" }}>
            Descuento de Instalación
          </Paragraph5>
          <Paragraph5 css={{ fontWeight: "bold", color: "green" }}>
            - 96.80€
          </Paragraph5>
        </div>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <H2>29.90€</H2>
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
            <H2>29.90€</H2>
          </div>
        </div>
      </div>
    </article>
  );
};

export default memo(Checkout);
