export type ReviewerType = {
  name: string;
  title: string;
  rating?: number;
};

export type ProductType = {
  Brand?: string;
  RAM?: string;
  title: string;
  category?: string;
  Language?: string;
  price: number;
  imgs: string[];
  specs?: string[];
  inStock?: number;
  Genre?: string;
  eta?: number;
  id: number;
  rating?: number;
  reviews?: ReviewerType[];
};
