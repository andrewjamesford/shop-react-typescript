import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  products: any;
};

const productsAndPrices = (
  products: { data: any[] },
  prices: { data: any[] }
) =>
  products.data.map((product: { id: any }) => ({
    prices: prices.data.filter(
      (price: { product: any }) => price.product === product.id
    ),
    ...product,
  }));

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
  const limit = 100;
  const products = await stripe.products.list({
    limit: limit,
  });
  const prices = await stripe.prices.list({
    limit: limit,
  });

  const allProductsAndPrices = productsAndPrices(products, prices);
  res.status(200).json(allProductsAndPrices);
}
