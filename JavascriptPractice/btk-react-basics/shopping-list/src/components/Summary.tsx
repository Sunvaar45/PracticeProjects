interface SummaryProps {
  itemsCount: number;
  completedItemsCount: number;
}

export function Summary({ itemsCount, completedItemsCount }: SummaryProps) {
  return <>
    <footer className="summary">
        {
            itemsCount === completedItemsCount && itemsCount > 0 ? (
                <p>You have bought all {itemsCount} items.</p>
            ) : (
                <p>You have bought {completedItemsCount} out of {itemsCount} items.</p>
            )
        }
    </footer>
  </>;
}
