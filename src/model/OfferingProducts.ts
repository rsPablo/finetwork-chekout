export interface OfferingProducts {
  _embedded: Embedded;
  _links: OfferingProductsLinks;
  page: Page;
}

export interface Embedded {
  products: Product[];
}

export interface Product {
  createdAt: Date;
  createdById: number | null;
  updatedAt: Date;
  updatedById: number | null;
  id: number;
  oldId: number | null;
  standaloneAllowed: boolean;
  description: string;
  name: string;
  displayName: string;
  type: Type;
  vodafoneBaseProductId: number;
  vodafoneProductId: number;
  fiberUploadMegas: number | null;
  fiberDownloadMegas: number | null;
  fiberTecnology: null | string;
  phonelineMegas: number | null;
  phonelineMinutes: number | null;
  phonelineSms: number | null;
  provider: string;
  bundleName: null;
  prices: Price[];
  _links: ProductLinks;
}

export interface ProductLinks {
  self: First;
  product: First;
  productConvergences: First;
  baseProduct: First;
}

export interface First {
  href: string;
}

export interface Price {
  convergenceId: number;
  price: number;
}

export enum Type {
  Fibervodafone = "FIBERVODAFONE",
  Phoneline = "PHONELINE",
  Switchboard = "SWITCHBOARD",
}

export interface OfferingProductsLinks {
  first: First;
  prev: First;
  self: First;
  next: First;
  last: First;
  profile: First;
}

export interface Page {
  size: number;
  totalElements: number;
  totalPages: number;
  number: number;
}
