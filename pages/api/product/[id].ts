import type { NextApiRequest, NextApiResponse } from "next";
type Data = {
  product: any;
};

const getPrices = (product: any, prices: { data: any[] }) => ({
  prices: prices.data.filter(
    (price: { product: any }) => price.product === product.id
  ),
  ...product,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;

  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
  const limit = 100;

  const product = await stripe.products.retrieve(id);
  const prices = await stripe.prices.list({
    limit: limit,
  });

  const productWithPrices = getPrices(product, prices);

  res.status(200).json(productWithPrices);
}
