import { Item } from "./Item";
import { items } from "../data";

export function ItemList() {
  const itemsArray = items.map((item, index) => (
    <Item
      key={index}
      itemObject={item} />
  ));

  return (
    <div className="list">
      <ul>
        {itemsArray}
      </ul>
    </div>
  );
}
