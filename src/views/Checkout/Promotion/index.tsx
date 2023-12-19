import { H3, H4, Paragraph4, Paragraph5, CheckIcon } from "@finetwork/ui";
import "./styles.scss";
import { FC } from "react";
import { PromotioProps } from "./type";
const Promotion: FC<PromotioProps> = ({
  description,
  webInfo,
  name,
  promotions,
  promotion,
  setPromotion,
}) => {
  return (
    <>
      <H4 css={{ fontFamily: "Druk sans" }}>01. Configura tu tarifa</H4>
      <H3>{name}</H3>
      <div className="separator__purple" />
      <Paragraph4>{description}</Paragraph4>
      <div className="features">
        {webInfo.features.map((el) => {
          return (
            <Paragraph5 key={el}>
              <CheckIcon /> {el}
            </Paragraph5>
          );
        })}
      </div>
      <Paragraph4>Elige la promición que quieras usar en tu tarifa</Paragraph4>
      <div className="promotion-container">
        {promotions.map((el, index) => {
          return (
            <div
              key={`${index}`}
              className={
                promotion === index
                  ? "promotion-card__selected"
                  : "promotion-card"
              }
              onClick={() => {
                setPromotion(index);
              }}
            >
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
    </>
  );
};

export default Promotion;
