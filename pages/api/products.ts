import type { NextApiRequest, NextApiResponse } from "next";
// import { Product } from "../../types/index";
// import { products } from "../../data/index";

type Data = {
  products: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  const products = await stripe.products.list({
    limit: 10,
  });
  res.status(200).json({ products });
}
