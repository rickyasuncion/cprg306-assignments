const Items = ({ItemList}) => {
  return ItemList.map((item) => (
    <li className="p-2 m-4 bg-slate-900 w-1/2 justify-center mx-auto">
      <ul>
        <li className="text-x font-bold mb-4">{item.name}</li>
        <li>
          Buy {item.quantity} in {item.category}
        </li>
      </ul>
    </li>
  ));
};

export default Items;
