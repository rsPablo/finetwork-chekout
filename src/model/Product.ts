export interface Product {
  id: number;
  type: string;
  name: string;
  description: string;
  prices: Price[];
  promotions: Promotion[];
  phonelineMegas: number;
  phonelineMinutes: number;
  phonelineSms: number;
  fiberDownloadMegas: number;
  webInfo: WebInfo;
}

export interface Price {
  name: string;
  price: number;
}

export interface Promotion {
  id: number;
  name: string;
  displayName: string;
  description: string;
  active: boolean;
  type: string;
}

export interface WebInfo {
  id: number;
  slug: string;
  menuTitle: string;
  name: string;
  description: string;
  analyticsName: string;
  tag: string;
  bullets: string[];
  features: string[];
}
