import { useQuery } from "react-query";

const fetchProducts = async () => {
  const host = process.env.NEXT_PUBLIC_HOST;
  const apiUrl = `${host}/api/products`;
  const response = await fetch(apiUrl);
  const result = await response.json();
  return result.products;
};

const useProducts = () => {
  return useQuery(["products"], () => fetchProducts());
};

export { useProducts, fetchProducts };
