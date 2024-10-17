import { useState } from "react";
import { SubCategoryList } from "./SubCategoryList";
import { INestedCategories } from "../interfaces";

interface ICategoryMenuProps {
  categoryGroups: INestedCategories;
  className?: string;
}

export function CategoryMenu({ categoryGroups, className }: ICategoryMenuProps) {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const handleClick = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <nav className={`category-nav ${className ? className : ""}`}>
      <ul className="category-menu max-width">
        {Object.keys(categoryGroups).map((category) => (
          <li
            onClick={() => handleClick(category)}
            key={category}
            className={`category-menu__main ${
              openCategory === category ? "category-menu__main--active" : ""
            }`}
          >
            {category}
            {openCategory === category && (
              <ul className="category-menu__dropdown">
                <h3 className="category-menu__title">{category}</h3>
                <SubCategoryList subcategory={categoryGroups[category]} />
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
