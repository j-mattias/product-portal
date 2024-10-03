import { Link } from "react-router-dom";

export function ErrorPage() {
  return (
    <section className="error-page flex-col">
      <h1 className="error-page__title">404 - Not Found</h1>
      <Link className="error-page__link b-radius-4" to="/">
        Go Home
      </Link>
    </section>
  );
}
