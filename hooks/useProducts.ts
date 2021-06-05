import ky from "ky-universal";
import { useQuery } from "react-query";

const fetchProducts = async (limit = 10) => {
  const parsed: any = await ky("/api/products").json();
  const result = parsed.filter((x: { id: number }) => x.id <= limit);
  return result;
};

const useProducts = (limit: number) => {
  return useQuery(["posts", limit], () => fetchProducts(limit));
};

export { useProducts, fetchProducts };
