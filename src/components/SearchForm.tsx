import { useSearchContext } from "../contexts";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export function SearchForm() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const { search } = useSearchContext();
  const [_, setSearchParams] = useSearchParams();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (search(input)) {
      // Navigate to search and update the search params
      navigate("search");
      setSearchParams({ q: input });
    }
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
