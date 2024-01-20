import React from "react";
import storeItems from "../../data/items.json";
import { StoreItem } from "../../components/storeItem/StoreItem";
import "./store.scss";

function Store() {
  return (
    <section className="container">
      <div className="store-items">
        {storeItems.map((item) => (
          <div key={item.id} className="store-item">
            <StoreItem {...item} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Store;
