import type { NextApiRequest, NextApiResponse } from "next";
import { Product } from "../../../types/index";
import { products } from "../../../data/index";

export default (req: NextApiRequest, res: NextApiResponse<Product[]>) => {
  const { id } = req.query;

  const productDetail: Product[] = products.filter((x) => x.id === id);

  res.status(200).json(productDetail);
};
