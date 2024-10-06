import { RouterProvider } from "react-router-dom";
import { router } from "../router";
import { ProductsContextProvider } from "../contexts";

export function App() {
  return (
    <ProductsContextProvider>
      <RouterProvider router={router} />
    </ProductsContextProvider>
  );
}
