import { Outlet } from "react-router-dom";
import { Header } from "../components";

export function RootLayout() {
  return (
    <>
      <Header />
      <main className="max-width">
        <Outlet />
      </main>
    </>
  );
}
