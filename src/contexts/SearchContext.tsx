import Fuse from "fuse.js";
import { createContext, ReactNode, useContext, useState } from "react";
import { IProduct } from "../interfaces";
import { useProductsContext } from "./ProductsContext";

interface ISearch {
  results: IProduct[];
  search: (input: string) => boolean;
  searchTerm: string;
}

interface ISearchContextProps {
  children: ReactNode;
}

const SearchContext = createContext<ISearch | null>(null);

export function SearchContextProvider({ children }: ISearchContextProps) {
  const [results, setResults] = useState<IProduct[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { products } = useProductsContext();

  const fuseOptions = {
    keys: [
      "title",
      { name: "category", weight: 0.6 },
      { name: "tags", weight: 0.2 },
      { name: "brand", weight: 0.4 },
    ],
    threshold: 0.18,
  };

  const fuse = new Fuse(products, fuseOptions);

  const search = (input: string) => {
    // Prevent searching with empty strings
    if (!input.trim().length) {
      return false;
    }

    // Search the products ("db") for items matching the user input
    const result = fuse.search(input);

    // Store just the product objects in an array
    const productArr = result.map((r) => r.item);
    setResults(productArr);
    setSearchTerm(input);
    return true;
  };

  return (
    <SearchContext.Provider value={{ results, search, searchTerm }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchContext() {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useSearchContext must be used within a SearchContextProvider");
  }

  return context;
}
