// import bcrypt from 'bcryptjs';

import { bindActionCreators } from "redux";
import { Brand, Category, Product } from "../typings";

// export const  users = [
//     {
//       name: 'John',
//       email: 'admin@example.com',
//       password: bcrypt.hashSync('123456'),
//       isAdmin: true,
//     },
//     {
//       name: 'Jane',
//       email: 'user@example.com',
//       password: bcrypt.hashSync('123456'),
//       isAdmin: false,
//     },
//   ],

export const products: Product[] = [
  {
    name: "Free Shirt",
    isFeatured: true,
    slug: "free-shirt",
    catId: "Shirts",
    subCatId: "budag",
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNvc21ldGljJTIwcHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1617897903246-719242758050?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29zbWV0aWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNvc21ldGljJTIwcHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1617897903246-719242758050?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29zbWV0aWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    ],
    price: 70,
    brandId: "Nike",
    rating: 4.5,
    numReviews: 8,
    countInStock: 20,
    description:
      "71% эссэнц агуулсан, чийгшил, бусад загвараасаа өө даралт илүү Арьс арчилгаа болон суурь тос түрхсэний дараа нүүрэндээ жигд, өөрийн зориулалтын порлоноор түрхэж өгнө.",
  },
  {
    name: "Fit Shirt",
    subCatId: "budag",
    isFeatured: true,
    slug: "fit-shirt",
    catId: "Shirts",
    images: [
      "https://images.unsplash.com/photo-1556227834-09f1de7a7d14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29zbWV0aWMlMjBwcm9kdWN0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    ],
    price: 80,
    brandId: "Adidas",
    rating: 3.2,
    numReviews: 10,
    countInStock: 20,
    description:
      "24 H CONTROL MAKE-UP WITH Q10 -Шингэн энгэсэг Кофермент Q10 бүхий өвөрмөц удаан тотоцтой суурь нь таны арьсыг 24 цагийн турш хамгаална. Өө сэв, нөсөө толбыг хангалттай далдлана. Онцгой бүтэцтэй тул арьсны уян хатан, бат бөх чанарыг нэмэгдүүлдэг бөгөөд ядрах шинж тэмдгээс сэргийлдэг. Хэрэглээ: Арьсан дээрээ хуруугаа эсвэл парлоноор зөөлөн түрхээрэй. Арьсны төрөл: Бүх төрлийн арьсанд болон харшилтай арсанд.Нүүрээ цэвэрлэсний дараа сайн чийгшүүлэх тос түрхэж өгөөд мөн хүсвэл суурь басе хэрэглэвэл илүү давуутай байдаг. Тэгээд кремнээс бага хэмжээгээр будалтын спонж дээр тусаагаад нүүрэндээ жигд шингээж түрхэж өгнө. Араас нь гэрэл сүүдэр болон хуурай пудр гэх мэт хэрэглэж болно.",
  },
  {
    name: "Slim Shirt",
    isFeatured: true,
    slug: "slim-shirt",
    catId: "shirts",
    subCatId: "us",
    images: [
      "https://images.unsplash.com/photo-1600852435574-9184cc5b55ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
    ],
    price: 90,
    brandId: "Puma",
    rating: 4.5,
    numReviews: 3,
    countInStock: 0,
    description: "A popular shirt",
  },
  {
    name: "Golf Pants",
    isFeatured: true,
    slug: "golf-pants",
    catId: "Pants",
    subCatId: "us",
    images: [
      "https://images.unsplash.com/photo-1556756483-7bf188a604e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNvc21ldGljJTIwcHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    ],
    price: 90,
    brandId: "Puma",
    rating: 2.9,
    numReviews: 13,
    countInStock: 20,
    description:
      '"ACNE COVER MATTIFYING POWDER /Батгашилттай арьсанд зориулсан энгэсэг/  Асуудалтай арьсанд зориулсан матт шахмал энгэсэг Арьсны төрөл : Бүх төрлийн арьсанд тохиромжтой Асуудалтай арьсанд тусгайлан арьсны тослогийг хянах зориулалттай. Өө дарагч+нүүрний шингэн энгэсэг гэсэн 2 тусдаа хэсгээс бүрдэнэ. Австралийн цайны модны навчнаас гаргаж авсан ханд агуулсан учираас нян үржихээс сэргийлж арьсыг бүхэл өдрийн турш хамгаална. Өөрөөр хэлбэл батгыг нэмж сэдрээхгүй толбогүй хатаах зориулалттай."Нүүрээ цэвэрлэсний дараа сайн чийгшүүлэх тос түрхэж өгөөд мөн хүсвэл суурь басе хэрэглэвэл илүү давуутай байдаг. Тэгээд кремнээс бага хэмжээгээр будалтын спонж дээр тусаагаад нүүрэндээ жигд шингээж түрхэж өгнө. Араас нь гэрэл сүүдэр болон хуурай пудр гэх мэт хэрэглэж болно.',
  },
  {
    name: "Fit Pants",
    isFeatured: false,
    slug: "fit-pants",
    catId: "Pants",
    subCatId: "us",

    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fGNvc21ldGljJTIwcHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    ],
    price: 95,
    brandId: "Zara",
    rating: 3.5,
    numReviews: 7,
    countInStock: 0,
    description: "A popular pants",
  },
  {
    name: "Classic shirt",
    isFeatured: false,
    slug: "classic-shirt",
    catId: "shirts",
    subCatId: "us",
    images: [
      "https://images.unsplash.com/photo-1585232350744-974fc9804d65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGNvc21ldGljJTIwcHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    ],
    price: 75,
    brandId: "Saihan",
    rating: 2.4,
    numReviews: 14,
    countInStock: 20,
    description: "A popular pants",
  },
];

export const brands: Brand[] = [
  {
    name: "Nike",
    image:
      "https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    id: "nike",
  },
  {
    name: "Adidas",
    image:
      "https://images.unsplash.com/photo-1584441405886-bc91be61e56a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    id: "adidas",
  },
  {
    name: "Puma",
    image:
      "https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    id: "puma",
  },
  {
    name: "Zara",
    image:
      "https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YnJhbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    id: "zara",
  },
  {
    name: "Saihan",
    image:
      "https://images.unsplash.com/photo-1612810806546-ebbf22b53496?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJyYW5kJTIwbG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    id: "saihan",
  },
];

export const categories: Category[] = [
  {
    name: "Нүүр будалт",
    id: "shirts",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29zbWV0aWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    subCategories: [
      {
        name: "budag",
        id: "budag",
      },
      {
        name: "shunh",
        id: "shunh",
      },
    ],
  },
  {
    name: "Үнэртэй ус",
    id: "pants",
    image:
      "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29zbWV0aWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    subCategories: [
      {
        name: "us",
        id: "us",
      },
    ],
  },
  //   {
  //     name: "Үс арчилгаа",
  //     id: "vs-archilgaa",
  //     image:
  //       "https://images.unsplash.com/photo-1617897903246-719242758050?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29zbWV0aWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  //   },
  //   {
  //     name: "Гоо сайхны хэрэгсэл",
  //     id: "goo-saihan-heregsel",
  //     image:
  //       "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvc21ldGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //   },
  //   {
  //     name: "Эрүүл мэнд",
  //     id: "ervvl-mend",
  //     image:
  //       "https://images.unsplash.com/photo-1571875257727-256c39da42af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29zbWV0aWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  //   },
];

export const banners = [
  {
    image:
      "https://images.unsplash.com/photo-1601049413574-214d105b26e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNvc21ldGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    image:
      "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29zbWV0aWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];
