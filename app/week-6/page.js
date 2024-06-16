import ItemList from "./item-list"

export default function page() {
  return (
    <main className="mx-auto text-center font-serif">
        <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
        <ItemList/>
    </main>
  )
}