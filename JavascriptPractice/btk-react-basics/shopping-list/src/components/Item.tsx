interface ItemProps {
    itemObject: {
        id: number;
        title: string;
        quantity: number;
        completed: boolean;
    };
    onDeleteItem: (id: number) => void;
    onToggleItem: (id: number) => void;
}

export function Item({ itemObject, onDeleteItem, onToggleItem }: ItemProps) {
  return (
    <li>
      <input type="checkbox" checked={itemObject.completed}
        onChange={ () => onToggleItem(itemObject.id) } 
      />
      <span style={itemObject.completed ? { textDecoration: "line-through" } : {}}>
        {itemObject.quantity} {itemObject.title}
      </span>
      <button onClick={ () => onDeleteItem(itemObject.id) }>X</button>
    </li>
  );
}
