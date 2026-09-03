import type { IItem } from "../types";
import { Item } from "./Item";

interface ItemListProps {
  items: IItem[];
}

export function ItemList({ items }: ItemListProps) {
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
