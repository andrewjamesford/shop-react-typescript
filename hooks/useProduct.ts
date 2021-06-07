import { useQuery } from "react-query";

const fetchProduct = async (id: any) => {
  const host = process.env.NEXT_PUBLIC_HOST;
  const apiUrl = `${host}/api/product/${id}`;
  const response = await fetch(apiUrl);
  const result = await response.json();
  return result;
};

const useProduct = (id: { id: string }) => {
  return useQuery(["product", id], () => fetchProduct(id));
};

export { useProduct, fetchProduct };
