import Fuse from "fuse.js";
import { useProductsContext, useSearchContext } from "../contexts";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export function SearchForm() {
  const {products} = useProductsContext();
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const {setResults} = useSearchContext();
  const [_, setSearchParams] = useSearchParams();

  const fuseOptions = {
    keys: [
      "title",
      {name: "category", weight: 0.6},
      {name: "tags", weight: 0.2},
      {name: "brand", weight: 0.4}
    ],
    threshold: 0.18,
  }

  const fuse = new Fuse(products, fuseOptions);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    // Prevent searching with empty strings
    if (!input.trim().length) {
      return;
    }
    
    // Search the products ("db") for items matching the user input
    const result = fuse.search(input);

    // Store just the product objects in an array
    const productArr = result.map(r => r.item);
    setResults(productArr);

    // Navigate to search and update the search params
    navigate("search");
    setSearchParams({q: input});
  };

  return (
    <>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-form__input-wrapper">
          <input
            className="search-form__input"
            type="text"
            name="search"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search product"
          />
          <button className="search-form__btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </form>
    </>
  );
}
