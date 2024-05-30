"use client";
import { useState } from "react";

const NewItem = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  const submitFunction = (event) => {
    event.preventDefault();

    const item = {
      name: { name },
      quantity: { quantity },
      category: { category },
    };

    console.log(item);
    alert(
      "Added item: " +
        name +
        ", quantity: " +
        quantity +
        ", category: " +
        category
    );

    setName("");
    setQuantity("1");
    setCategory("Produce");
  };

  return (
    <main className="flex justify-center w-full">
      <form
        onSubmit={submitFunction}
        className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full"
      >
        <input
          type="text"
          className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans mb-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item name"
          required
        />
        <div className="flex justify-between">
          <input
            type="number"
            className="w-20 ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Enter quantity"
            min={1}
            max={99}
            required
          />
          <select
            class="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled="">
              Category
            </option>
            <option value="produce" selected="">
              Produce
            </option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          +
        </button>
      </form>
    </main>
  );
};

export default NewItem;