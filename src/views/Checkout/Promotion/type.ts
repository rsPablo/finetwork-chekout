import { Promotion, WebInfo } from "../../../model/Product";

export type PromotioProps = {
  description: string;
  webInfo: WebInfo;
  name: string;
  promotions: Promotion[];
  promotion: number;
  setPromotion: (value: number) => void;
};
