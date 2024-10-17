import { Outlet, ScrollRestoration } from "react-router-dom";
import { CategoryMenu, Footer, Header, LoadingIndicator } from "../components";
import { useFetchProducts } from "../customHooks";
import { CartContextProvider, SearchContextProvider } from "../contexts";
import { groupedCategories } from "../data";

const URL = "https://dummyjson.com/products?limit=0";

export function RootLayout() {
  const { isPending, error } = useFetchProducts(URL);

  return (
    <>
      <CartContextProvider>
        <SearchContextProvider>
          <Header />
          <CategoryMenu categoryGroups={groupedCategories} className="category-menu--root" />
          <main className="max-width">
            <Outlet />
            {error && <div>{error}</div>}
            {isPending && <LoadingIndicator />}
          </main>
          <Footer />
        </SearchContextProvider>
      </CartContextProvider>
      <ScrollRestoration />
    </>
  );
}
