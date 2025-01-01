import { Link } from "react-router-dom";
import { useRef } from "react";
import { TCategory } from "../interfaces";

interface ISubCategoryListProps {
  subcategory: TCategory;
}

export function SubCategoryList({ subcategory }: ISubCategoryListProps) {
  const isArray = Array.isArray(subcategory);
  
  // Select the overlay that closes mobile nav when clicked
  const closeRef = useRef<HTMLLabelElement | null>(document.querySelector("#hamburger-nav__overlay"));

  // Used to close the navmenu when a link has been clicked
  const handleClose = () => {
    if (closeRef.current) {
      closeRef.current.click();
    }
  }

  // If it's an array, return list items. Else wrap it and create sub lists for subcategories
  return (
    <>
      {isArray ? (
        <>
          {subcategory.map((category) => (
            <li className="sub-category-list__item" key={category} onClick={handleClose}>
              <Link to={`category/${category}`}>{category.replace("-", " ")}</Link>
            </li>
          ))}
        </>
      ) : (
        <div className="sub-category__wrapper">
          {Object.keys(subcategory).map((category) => (
            <li className="sub-category-list__item" key={category}>
              {category}
              <ul className="sub-category-list">
                <SubCategoryList subcategory={subcategory[category]} />
              </ul>
            </li>
          ))}
        </div>
      )}
    </>
  );
}
