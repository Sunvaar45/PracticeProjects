import type { IItem } from "../types";
import { Item } from "./Item";

interface ItemListProps {
  items: IItem[];
  onDeleteItem: (id: number) => void;
}

export function ItemList({ items, onDeleteItem }: ItemListProps) {
  const itemsArray = items.map((item, index) => (
    <Item
      key={index}
      itemObject={item} 
      onDeleteItem={onDeleteItem}
    />
  ));

  return <>
  {
    items.length > 0 ? (
      <div className="list">
        <ul>
          {itemsArray}
        </ul>
      </div>
    ) : 
    (
      <p>No items in the list</p> 
    )
  }
  </>;
}
