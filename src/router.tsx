import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { RootLayout } from "./layouts";
import { ErrorPage, HomePage, ProductDetailsPage, ProductsPage } from "./pages";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />} path="/">
      <Route element={<HomePage />} index />
      <Route element={<ProductsPage />} path="products" />
      <Route element={<ProductDetailsPage />} path="product/:id" />
      <Route element={<ErrorPage />} path="*" />
    </Route>
  )
);
