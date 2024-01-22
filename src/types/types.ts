export type ProductType = {
  Brand: string;
  RAM: string;
  title: string;
  category: string;
  price: number;
  imgs: string[];
  specs: string[];
  inStock: number;
  eta: number;
  id: string;
  rating: number;
  reviews: {
    name: string;
    title: string;
    content: string;
    rating: number | string;
  }[];
};
