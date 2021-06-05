import { useQuery } from "react-query";

const fetchProducts = async () => {
  const response = await fetch("http://localhost:3000/api/products");
  const result = await response.json();
  return result.products;
};

const useProducts = () => {
  return useQuery(["products"], () => fetchProducts());
};

export { useProducts, fetchProducts };
