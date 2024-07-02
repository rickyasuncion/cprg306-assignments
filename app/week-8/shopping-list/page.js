"use client";
import React, { useEffect, useState } from "react";
import NewItem from "../shopping-list/new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./item.json";
import { UserAuth } from "../_utils/auth-context";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(null);
  const { user } = UserAuth();

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (item) => {
    let name = item.name.split(/[\s,]+/)[0].trim();
    if (name.endsWith("s")) {
      name = name.slice(0, -1);
    }

    console.log(name);
    setSelectedItemName(name);
  };

  return !user ? (
    <main className="mx-auto text-center font-serif flex justify-center gap-3">
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="flex-1">
        {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
      </div>
    </main>
  ) : (
    <main>
      <h1 className="text-3xl font-bold mb-4">User not logged in</h1>
    </main>
  );
}
