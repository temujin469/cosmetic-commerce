export type Product = {
  name: string;
  slug: string;
  subCategory:{
    slug:string
    name:string
  };
  category:{
    slug:string
    name:string
  }
  images:{}[];
  thumbnail:{}
  isFeatured: boolean;
  tags:string[]
  brand:{
    slug:string
    name:string
    logo:{}
  };
  description:{}[];
  options:Option[];
  defaultOption:Option;
};

export type Option = {
  countInStock:number
  name:string
  price:number
}

// export type ProductType = "cosmetic" | "products"
// export type BrandType = "cosmeticBrands" | "brands"
// export type categoryType = "cosmeticCategories" | "categories"

export type CartItem = {
  slug: string;
  image: string;
  price: number;
  productName: string;
  optionName: string;
  countInStock:number;
  quantity: number
  // brand:Brand;
};

export type Brand = {
  backgroundImage:{}
  logo:{}
  name: string;
  slug: string;
}

export type Category = {
  name: string;
  slug: string;
  subCategories: SubCategory[];
}

export type SubCategory = {
  name: string;
  slug: string 
}

export type Advertising = {
  _id:string
  image:{}
  name:string
}
