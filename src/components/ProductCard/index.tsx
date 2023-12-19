import { FC, memo } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  H2,
  Button,
  H4,
} from "@finetwork/ui";
import { useNavigate } from "react-router-dom";
import { ProductCardProps } from "./type";

const ProductCard: FC<ProductCardProps> = ({ displayName, price }) => {
  const navigate = useNavigate();

  return (
    <Card
      hoverAnimation
      kind="secondary"
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "&:hover": {
          ".button": {
            backgroundColor: "#fff",
            color: "#000",
          },
          '[data-fi="typography-highlight"]': {
            backgroundColor: "#fff",
          },
          h2: {
            color: "#fff",
          },
        },
      }}
    >
      <CardHeader>
        <H4 align="center">{displayName}</H4>
      </CardHeader>
      <CardBody>
        <H2
          isHighLight
          align="center"
          highLightKind="secondary"
          css={{
            color: "#000",
          }}
        >
          {`${price}€`}
        </H2>
      </CardBody>
      <CardFooter>
        <div
          onClick={() => {
            navigate("/checkout");
          }}
        >
          <Button kind="secondary" className="button">
            La quiero
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default memo(ProductCard);
