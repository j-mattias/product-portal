import { Link, useSearchParams } from "react-router-dom";

interface IPaginationProps {
  currentPage: number;
  numPages: number;
}

export function Pagination({ currentPage, numPages }: IPaginationProps) {
  const pages = Array.from({ length: numPages }, (_, i) => i + 1);

  const computedPrev = currentPage - 1;
  const computedNext = currentPage + 1;

  const [searchParams] = useSearchParams();

  // Compute the search parameters to set
  const computeParams = (page: number) => {
    let paramsArr: string[] = [];

    // If the params doesn't have a page param, add it
    if (!searchParams.has("page")) {
      searchParams.set("page", page.toString());
    }

    // Add the key/value params to an array
    searchParams.forEach((value, key) => {
      if (key === "page") {
        paramsArr.push(`page=${page}`);
      } else {
        paramsArr.push(`${key}=${value}`);
      }
    });

    // Return a string of all params, join with & if there are multitple params
    return "?" + paramsArr.join("&");
  };

  return (
    <ul className="pagination">
      {computedPrev >= 1 && (
        <li className="pagination__item">
          <Link
            to={computeParams(computedPrev)}
            className="pagination__link pagination__link--prev b-radius-4"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </Link>
        </li>
      )}

      {pages.map((page) => {
        const active = currentPage === page ? "pagination__active" : "";
        let displayPage: number | null = null;

        // Display first, last and current page at all times
        if (page === 1 || page === numPages || page === currentPage) {
          displayPage = page;
        } else if (numPages > 5) {
          // Display the 2 pages after the currentPage
          if (page >= currentPage + 1 && page <= currentPage + 2) {
            displayPage = page;
          }
          // Display the 2 pages before the currentPage
          if (page >= currentPage - 2 && page < currentPage) {
            displayPage = page;
          }
        } else {
          displayPage = page;
        }

        return displayPage ? (
          <li className={`pagination__item`} key={page}>
            <Link to={computeParams(page)} className={`pagination__link b-radius-4 ${active}`}>
              {displayPage}
            </Link>
          </li>
        ) : null;
      })}

      {computedNext <= numPages && (
        <li className="pagination__item">
          <Link
            to={computeParams(computedNext)}
            className="pagination__link pagination__link--next b-radius-4"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </Link>
        </li>
      )}
    </ul>
  );
}
