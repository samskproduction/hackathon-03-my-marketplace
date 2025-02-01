import product1 from "../images/Photo.png";
import product2 from "../images/Photo (1).png";
import product3 from "../images/Photo (2).png";
import product4 from "../images/Photo (3).png";
import product5 from "../images/Photo (4).png";
import product6 from "../images/Photo (5).png";
import product7 from "../images/Photo (6).png";
import product8 from "../images/Photo (7).png";
import { StaticImageData } from "next/image";
export interface Product {
  id: number;
  slug: string;
  link: string;
  name: string;
  price: number;
  description: string;
  quantity: number;
  imageSrc: StaticImageData;
}

export const Products = [
  {
    id: 1,
    slug: "the-dandy-chair",
    link: "singlepage/the-dandy-chair",
    name: "The Dandy chair",
    price: 250,
    description:
      "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
    quantity: 1,
    imageSrc: product1,
  },
  {
    id: 2,
    slug: "rustic-vase-set",
    link: "singlepage/rustic-vase-set",
    name: "Rustic Vase Set",
    price: 155,
    description:
      "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
    quantity: 1,
    imageSrc: product2,
  },
  {
    id: 3,
    slug: "the-silky-vase",
    link: "singlepage/the-silky-vase",
    name: "The Silky Vase",
    price: 125,
    description:
      "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
    quantity: 1,
    imageSrc: product3,
  },
  {
    id: 4,
    slug: "the-lucy-lamp",
    link: "singlepage/the-lucy-lamp",
    name: "The Lucy Lamp",
    price: 399,
    description:
      "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
    quantity: 1,
    imageSrc: product4,
  },
  {
    id: 5,
    slug: "the-dandy-chair",
    link: "singlepage/the-dandy-chair",
    name: "The Dandy chair",
    price: 250,
    description:
      "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
    quantity: 1,
    imageSrc: product5,
  },
  {
    id: 6,
    slug: "rustic-vase-set",
    link: "singlepage/rustic-vase-set",
    name: "Rustic Vase Set",
    price: 155,
    description:
      "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
    quantity: 1,
    imageSrc: product6,
  },
  {
    id: 7,
    slug: "the-silky-vase",
    link: "singlepage/the-silky-vase",
    name: "The Silky Vase",
    price: 125,
    description:
      "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
    quantity: 1,
    imageSrc: product7,
  },
  {
    id: 8,
    slug: "the-lucy-lamp",
    link: "singlepage/the-lucy-lamp",
    name: "The Lucy Lamp",
    price: 399,
    description:
      "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
    quantity: 1,
    imageSrc: product8,
  },
];
