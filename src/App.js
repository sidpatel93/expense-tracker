import ExpenseItem from "./components/ExpenseItem";


function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title="Toilet Paper" date={new Date(2021, 8, 15)} amount="25" />
      <ExpenseItem title="Sugar" date={new Date(2021, 7, 20)} amount="10" />
      <ExpenseItem title="Salt" date={new Date(2021, 8, 10)} amount="5" />
      <ExpenseItem title="Cookies" date={new Date(2021, 6, 25 )} amount="8" />
    </div>
  );
}

export default App;
