import React, { useState } from "react";
import Items from "./item";

const ItemList = ({ items, onItemSelect }) => {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category" || sortBy == "grouped") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const groupedItems = sortedItems.reduce((accumulator, currentItem) => {
    const { category } = currentItem;
    if (!accumulator[category]) {
      accumulator[category] = [];
    }
    accumulator[category].push(currentItem);
    return accumulator;
  }, {});

  return (
    <div>
      <button
        onClick={() => setSortBy("name")}
        style={{ backgroundColor: sortBy === "name" ? "#F97316" : "#C2410C" }}
        className="p-1 m-2 w-40"
      >
        Sort by Name
      </button>
      <button
        onClick={() => setSortBy("category")}
        style={{
          backgroundColor: sortBy === "category" ? "#F97316" : "#C2410C",
        }}
        className="p-1 m-2 w-40"
      >
        Sort by Category
      </button>
      <ul>
        <Items ItemList={sortedItems} onSelect={onItemSelect} />
      </ul>
    </div>
  );
};

export default ItemList;
