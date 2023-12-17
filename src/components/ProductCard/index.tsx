import { FC } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  H2,
  Button,
} from "@finetwork/ui";

const ProductCard: FC = () => {
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
      <CardHeader>Fibra 600Mb</CardHeader>
      <CardBody>
        <H2
          isHighLight
          align="center"
          highLightKind="secondary"
          css={{ color: "#000" }}
        >
          14'90€
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

export default ProductCard;
