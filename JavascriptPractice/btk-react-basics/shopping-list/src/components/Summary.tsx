interface SummaryProps {
  itemsCount: number;
  completedItemsCount: number;
}

export function Summary({ itemsCount, completedItemsCount }: SummaryProps) {
  if (itemsCount === 0) {
    return (
        <footer className="summary">
            <p>You can start adding items to your list.</p>
        </footer>
    );
  }
    
  return <>
    <footer className="summary">
        {
            itemsCount === completedItemsCount ? (
                <p>You have bought all {itemsCount} items.</p>
            ) : (
                <p>You have bought {completedItemsCount} out of {itemsCount} items.</p>
            )
        }
    </footer>
  </>;
}
