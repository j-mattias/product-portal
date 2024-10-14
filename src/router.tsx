import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { RootLayout } from "./layouts";
import { AddProductPage, EditProductPage, ErrorPage, HomePage, ProductDetailsPage, ProductsPage, SearchPage } from "./pages";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />} path="/">
      <Route element={<HomePage />} index />
      <Route element={<ProductsPage />} path="products" />
      <Route element={<ProductDetailsPage />} path="product/:id" />
      <Route element={<AddProductPage />} path="add-product" />
      <Route element={<EditProductPage />} path="edit-product/:id" />
      <Route element={<SearchPage />} path="search" /> 
      <Route element={<ErrorPage />} path="*" />
    </Route>
  )
);
