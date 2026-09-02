export default function Footer() {
  const hour = new Date().getHours();
  const openingHour = 10;
  const closingHour = 22;
  const isOpen = hour >= openingHour && hour <= closingHour;
  console.log(isOpen);

  return (
    <footer>
      {isOpen ? (
        <p>We are open until {closingHour}:00.</p>
      ) : (
        <p>We are closed. Our working hours are from {openingHour}:00 to {closingHour}:00.</p>
      )}
    </footer>
  );
}
