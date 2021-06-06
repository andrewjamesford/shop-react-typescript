import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  products: Product[];
};

type Product = {
  name: string;
  id: string;
  image: string;
  price: number;
  description?: string;
  variant?: string;
};

const productData: Product[] = [
  {
    name: "T-Shirt",
    id: "0000-0001",
    image: "/tshirt.jpg",
    price: 49.99,
  },
  {
    name: "Sweatshirt",
    id: "0000-0002",
    image: "/sweatshirt.jpg",
    price: 99.99,
  },
  {
    name: "Cap",
    id: "0000-0003",
    image: "/cap.jpg",
    price: 29.99,
  },
  {
    name: "Cap 5 Panel",
    id: "0000-0004",
    image: "/cap-5panel.jpg",
    price: 29.99,
  },
  {
    name: "Tote bag",
    id: "0000-0005",
    image: "/tote.jpg",
    price: 9.99,
  },
  {
    name: "Tank Racerback",
    id: "0000-0006",
    image: "/tank-bella.jpg",
    price: 19.99,
  },
];

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ products: productData });
};
