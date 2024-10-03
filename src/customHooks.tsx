import { useEffect, useState } from "react";
import { useProductsContext } from "./contexts";
import { mapProductData } from "./helpers";

// Fetch product data if it's not already stored in the products context
export function useFetchProducts(url: string) {
  const { products, setProducts } = useProductsContext();

  const isNotStored = products.length === 0;

  const [isPending, setIsPending] = useState(isNotStored);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const apiData = await response.json();

        // Set new scheme for product objects
        const data = mapProductData(apiData.products);

        // Store data in the products context
        setProducts(data);

        setIsPending(false);
        setError(null);
      } catch (error: any) {
        console.error(error);
        setError(error.message);
        setIsPending(false);
      }
    };

    // If products have not been fetched, fetch them
    if (isNotStored) {
      fetchData();
    }

  }, [url]);

  return { isPending, error };
}
