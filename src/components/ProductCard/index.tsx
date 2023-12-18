import { FC, memo } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  H2,
  Button,
} from "@finetwork/ui";
import { ProductCardProps } from "./type";

const ProductCard: FC<ProductCardProps> = ({ displayName, price }) => {
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
      <CardHeader>{displayName}</CardHeader>
      <CardBody>
        <H2
          isHighLight
          align="center"
          highLightKind="secondary"
          css={{ color: "#000" }}
        >
          {`${price}€`}
        </H2>
      </CardBody>
      <CardFooter>
        <Button kind="secondary" className="button">
          La quiero
        </Button>
      </CardFooter>
    </Card>
  );
};

export default memo(ProductCard);
