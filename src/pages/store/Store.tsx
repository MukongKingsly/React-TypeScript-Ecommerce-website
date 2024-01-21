// import React from "react";
// import storeItems from "../../data/items.json";
// import { StoreItem } from "../../components/storeItem/StoreItem";
// import "./store.scss";

// function Store() {
//   return (
//     <section className="container">
//       <div className="store-items">
//         {storeItems.map((item) => (
//           <div key={item.id} className="store-item">
//             <StoreItem {...item} />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Store;

import React, { useEffect, useState, useCallback } from "react";
import "./store.scss";

type CategoryType = {
  title: string;
  products: {
    title: string;
    price: number;
    imgs: string[];
  }[];
}[];

const Store: React.FC = () => {
  const [categories, setCategories] = useState<CategoryType>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [error, setError] = useState<string>("");

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/seebham/ecommerce-dummy-data/main/data.json",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setCategories(data.categories);
    } catch (err: any) {
      setError(err.message);
      console.error(20, err);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const filterProduct = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <section className="container">
      <div className="shopContainer">
        <div className="categoriesContainer">
          {Object.keys(categories).map((categoryKey: any) => (
            <button key={categoryKey} className="category">
              {categories[categoryKey].title}
            </button>
          ))}
        </div>
        <div className="productsContainer">
          {selectedCategory &&
            categories
              .find((category) => category.title === selectedCategory)
              ?.products.map((product) => (
                <div key={product.title} className="product">
                  <img src={product.imgs[0]} alt={product.title} />
                  <h3>{product.title}</h3>
                  <p>Price: ${product.price}</p>
                </div>
              ))}
        </div>
      </div>
      {error && <p>Error: {error}</p>}
    </section>
  );
};

export default Store;
