import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  products: Product[];
};

type Product = {
  name: string;
  id: string;
  productImage: string;
  price: number;
};

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ products: [] });
};
