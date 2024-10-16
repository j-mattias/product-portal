import { Link } from "react-router-dom";
import { TCategory } from "../interfaces";

interface ISubCategoryListProps {
  subcategory: TCategory;
}

export function SubCategoryList({ subcategory }: ISubCategoryListProps) {
  const isArray = Array.isArray(subcategory);

  // If it's an array, return list items. Else wrap it and create sub lists for subcategories
  return (
    <>
      {isArray ? (
        <>
          {subcategory.map((category) => (
            <li className="sub-category-list__item" key={category}>
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
