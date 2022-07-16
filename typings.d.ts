export type Product = {
  name: string;
  slug: string;
  catId: string;
  subCatId: string;
  images: string[];
  isFeatured: boolean;
  price: number;
  brandId: string;
  rating: number;
  numReviews: number;
  countInStock: number;
  description: string;
};

export type CartItem = {
  slug: string;
  image: string;
  price: number;
  name: string;
  quantity: number | 0;
  brand: {
    id?: string;
    name?: string;
    image?: string;
  };
};

export interface Brand {
  name: string;
  id: string;
  image: string;
}

export interface Category {
  name: string;
  image: string;
  id: string;
  subCategories: { name: string; id: string }[];
}
