interface ItemProps {
    itemObject: {
        id: number;
        title: string;
        quantity: number;
        completed: boolean;
    };
}

export function Item({ itemObject }: ItemProps) {
  return (
    <li>
      <span style={itemObject.completed ? { textDecoration: "line-through" } : {}}>
        {itemObject.quantity} {itemObject.title}
      </span>
      <button>X</button>
    </li>
  );
}
