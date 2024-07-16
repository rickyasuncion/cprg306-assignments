"use client";
import React, { useEffect, useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { UserAuth } from "../_utils/auth-context";
import { getItems, addItems } from "../_services/shopping-list-service";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState(null);
  const { user } = UserAuth();

  const handleAddItem = async (newItem) => {
    try {
      const id = await addItems(user.uid, newItem);
      newItem.id = id;
      setItems((prevItems) => [...prevItems, newItem]);
    } catch (error) {
      console.error("Failed to add item: ", error);
    }
  };

  const handleItemSelect = (item) => {
    let name = item.name.split(/[\s,]+/)[0].trim();
    if (name.endsWith("s")) {
      name = name.slice(0, -1);
    }

    console.log(name);
    setSelectedItemName(name);
  };

  const loadItems = async (user) => {
    try {
      const items = await getItems(user.uid);

      setItems(items);
    } catch (error) {
      console.error("Failed to load items: ", error);
    }
  };

  useEffect(() => {
    loadItems(user);
  }, [user]);

  return !user ? (
    <main>
      <h1 className="text-3xl font-bold mb-4">User not logged in</h1>
    </main>
  ) : (
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
  );
}
