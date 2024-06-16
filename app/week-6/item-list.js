"use client";
import React, { useState } from "react";
import Items from "./item";
import items from "./item.json";

const ItemList = () => {
  const [sortBy, setSortBy] = useState("name");

  items.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category" || sortBy == "grouped") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const separatedItems = items.reduce((accumulator, currentItem) => {
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
        <p>Sort by Name</p>
      </button>
      <button
        onClick={() => setSortBy("category")}
        style={{
          backgroundColor: sortBy === "category" ? "#F97316" : "#C2410C",
        }}
        className="p-1 m-2 w-40"
      >
        <p>Sort by Category</p>
      </button>
      <button
        onClick={() => setSortBy("grouped")}
        style={{
          backgroundColor: sortBy === "grouped" ? "#F97316" : "#C2410C",
        }}
        className="p-1 m-2 w-40"
      >
        <p>Sort by Grouped</p>
      </button>
      {sortBy != "grouped" && (
        <ul>
          <Items ItemList={items} />
        </ul>
      )}
      {sortBy === "grouped" &&
        Object.keys(separatedItems).map((category) => (
          <>
            <h1 className="text-xl capitalize m-0 border-t-2">{category}</h1>
            <ul>
              <Items ItemList={separatedItems[category]} />
            </ul>
          </>
        ))}
    </div>
  );
};

export default ItemList;
