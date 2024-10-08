import { useEffect, useState } from "react";
import { Carousel } from "../components";
import { useProductsContext } from "../contexts";
import { IProduct } from "../interfaces";

export function HomePage() {
  const { products } = useProductsContext();
  const [featured, setFeatured] = useState<IProduct[]>([]);

  // Get random products to put on as featured items
  const randomFeatured = (productList: IProduct[], returnLen: number) => {
    const len = products.length;
    let arr: IProduct[] = [];
    let used = new Set<number>();

    // Get returnLen amount of unique random products
    for (let i = 0; i < returnLen; i++) {
      let index: number;

      // Randomize an index until it's not already been used
      do {
        index = Math.floor(Math.random() * len);
      } while (used.has(index));

      // Keep track of used indexes
      used.add(index);
      
      arr.push(productList[index]);
    }

    return arr;
  };

  // Set the products to be featured once products have loaded in
  useEffect(() => {
    if (products.length > 0) {
      setFeatured(randomFeatured(products, 5));
    }
  }, [products]);

  return (
    <section className="home-page flex-col">
      <h1 className="home-page__title">Featured</h1>
      {featured.length > 0 && <Carousel products={featured} />}
    </section>
  );
}
