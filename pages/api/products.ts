import type { NextApiRequest, NextApiResponse } from "next";
import { Product } from "../../types/index";
import { products } from "../../data/index";

type Data = {
  products: Product[];
};

const productData: Product[] = products;

const prods = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ products: productData });
};

export default prods;
