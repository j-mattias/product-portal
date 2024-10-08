import { Outlet, ScrollRestoration } from "react-router-dom";
import { Header } from "../components";
import { useFetchProducts } from "../customHooks";

const URL = "https://dummyjson.com/products?limit=0";

export function RootLayout() {
  const { isPending, error } = useFetchProducts(URL);

  return (
    <>
      <Header />
      <main className="max-width">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        <Outlet />
      </main>
      <ScrollRestoration />
    </>
  );
}