import "./ExpenseDate.css";
type datePropType = {
  date: Date;
};
function ExpenseDate({ date }: datePropType) {
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();
  return (
    <div className="date">
      <div className="day">{day}</div>
      <div className="month">{month}</div>
      <div className="year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
