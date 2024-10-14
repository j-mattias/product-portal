import { createContext, ReactNode, useContext, useState } from "react";
import { IProduct } from "../interfaces";

interface ISearch {
  results: IProduct[];
  setResults: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

interface ISearchContextProps {
  children: ReactNode;
}

const SearchContext = createContext<ISearch | null>(null);

export function SearchContextProvider({ children }: ISearchContextProps) {
  const [results, setResults] = useState<IProduct[]>([]);

  return (
    <SearchContext.Provider value={{ results, setResults }}>
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