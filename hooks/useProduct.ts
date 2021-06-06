import { useQuery } from "react-query";

const fetchProduct = async (id: any) => {
  const response = await fetch(`http://localhost:3000/api/product/${id}`);
  const result = await response.json();
  return result;
};

const useProducts = (id: { id: string }) => {
  return useQuery(["product", id], () => fetchProduct(id));
};

export { useProducts, fetchProduct };
