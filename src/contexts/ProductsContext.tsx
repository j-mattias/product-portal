import { createContext, ReactNode, useContext, useState } from "react";
import { IProduct } from "../interfaces";

interface IProductsProviderProps {
  children: ReactNode;
}

interface IProductsContext {
  products: IProduct[];
  setProducts: React.Dispatch<React.SetStateAction<IProduct[] | []>>;
}

const ProductsContext = createContext<IProductsContext | null>(null);

export function ProductsContextProvider({children}: IProductsProviderProps) {
  const [products, setProducts] = useState<IProduct[] | []>([]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProductsContext() {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error("useProductsContext must be used within a ProductsContextProvider");
  }

  return context;
}
