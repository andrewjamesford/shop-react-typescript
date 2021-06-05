import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  products: Product[];
};

type Product = {
  name: string;
  id: string;
  productImage: string;
  price: number;
  description?: string;
  variant?: string;
};

const productData: Product[] = [
  {
    name: "T-Shirt",
    id: "0000-0001",
    productImage: "/tshirt.jpg",
    price: 49.99,
  },
  {
    name: "Sweatshirt",
    id: "0000-0002",
    productImage: "/sweatshirt.jpg",
    price: 99.99,
  },
];

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ products: productData });
};
