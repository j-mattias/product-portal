import { Outlet, ScrollRestoration } from "react-router-dom";
import { Header, LoadingIndicator } from "../components";
import { useFetchProducts } from "../customHooks";
import { CartContextProvider } from "../contexts";

const URL = "https://dummyjson.com/products?limit=0";

export function RootLayout() {
  const { isPending, error } = useFetchProducts(URL);

  return (
    <>
      <CartContextProvider>
        <Header />
        <main className="max-width">
          <Outlet />
          {error && <div>{error}</div>}
          {isPending && <LoadingIndicator />}
        </main>
      </CartContextProvider>
      <ScrollRestoration />
    </>
  );
}
