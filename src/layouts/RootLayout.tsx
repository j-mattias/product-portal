import { Outlet } from "react-router-dom";
import { Header } from "../components";
import { ProductsContextProvider } from "../contexts";

export function RootLayout() {
  return (
    <>
      <Header />
      <main className="max-width">
        <ProductsContextProvider>
          <Outlet />
        </ProductsContextProvider>
      </main>
    </>
  );
}
