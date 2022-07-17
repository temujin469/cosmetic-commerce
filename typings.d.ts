export type Product = {
  name: string;
  slug: string;
  catSlug: string;
  subCatSlug: string;
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
  countInStock:number;
  quantity: number
  brand: {
    id?: string;
    name?: string;
    image?: string;
  };
};

export interface Brand {
  name: string;
  slug: string;
  image: string;
}

export interface Category {
  name: string;
  image: string;
  slug: string;
  subCategories: { name: string; slug: string }[];
}
