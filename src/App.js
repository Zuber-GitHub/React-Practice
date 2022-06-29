import ExpenseItem  from "./Components/ExpenseItems";
function App() {
  const expenses = [
    {title: 'Food', amount: 200,date : new Date(2022,7 ,14).toString().slice(0,15),location: 'Panjurli Hubli'},
    {title: 'Bill', amount: 500,date : new Date(2022,7 ,15).toString().slice(0,15),location: 'Hescom Hubli'},
    {title: 'Movie', amount: 250,date : new Date(2022,8 ,14).toString().slice(0,15),location: 'Cinepolis Hubli'},
    {title: 'College', amount: 75000,date : new Date(2022,8 ,14).toString().slice(0,15),location: 'Kle Tech'}
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      {expenses.map(item=>
        {
          return (
            <ExpenseItem title={item.title} amount = {item.amount}
            date ={item.date} location={item.location}></ExpenseItem>
          )
        })}



    </div>
  );
}

export default App;
