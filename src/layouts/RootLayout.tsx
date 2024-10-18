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
            {error && <div className="error">{error}</div>}
            {!error && <Outlet />}
            {isPending && <LoadingIndicator />}
          </main>
          <Footer />
        </SearchContextProvider>
      </CartContextProvider>
      <ScrollRestoration />
    </>
  );
}
