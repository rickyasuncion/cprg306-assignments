"use client"
import { useState } from "react";
import NewItem from "../week-6/new-item"
import ItemList from "./item-list"
import itemsData from "./item.json";


export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="mx-auto text-center font-serif">
        <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
        <NewItem onAddItem={handleAddItem}/>
        <ItemList items={items}/>
    </main>
  )
}