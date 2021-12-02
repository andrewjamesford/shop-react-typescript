import type { NextApiRequest, NextApiResponse } from "next";
// import { Product } from "../../../types/index";
// import { products } from "../../../data/index";
type Data = {
  products: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;

  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  const product = await stripe.products.retrieve(id);

  res.status(200).json(product);
}
