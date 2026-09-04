interface ItemProps {
    itemObject: {
        id: number;
        title: string;
        quantity: number;
        completed: boolean;
    };
    onDeleteItem: (id: number) => void;
}

export function Item({ itemObject, onDeleteItem }: ItemProps) {
  return (
    <li>
      <span style={itemObject.completed ? { textDecoration: "line-through" } : {}}>
        {itemObject.quantity} {itemObject.title}
      </span>
      <button onClick={ () => onDeleteItem(itemObject.id) }>X</button>
    </li>
  );
}
