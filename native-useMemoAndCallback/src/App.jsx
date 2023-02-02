import { useMemo, useState, useCallback } from "react";
import "./App.css";

function SortedList({ list, sortFunc }) {
  console.log("SortedList Render");

  const sortedList = useMemo(() => {
    console.log("Running Sort");
    return [...list].sort(sortFunc);
  }, [list, sortFunc]);
  return <div>{sortedList.join(", ")}</div>;
}

function App() {
  const [numbers] = useState([20, 30, 40]);

  const total = useMemo(
    () => numbers.reduce((acc, number) => acc + number, 0),
    [numbers]
  );

  //Data nama
  const [names] = useState(["Kartono", "Hamid", "Ayub", "Samsul", "Ali"]);

  // //Mengurutkan nama dari yang terpendek
  // const sortedNames = useMemo(() => [...names].sort(), [names]);

  //Menggunakan Memo untuk penjumlahan Total
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const countTotal = useMemo(() => count1 + count2, [count1, count2]);

  const sortFunc = useCallback((a, b) => a.localeCompare(b) * -1, []);

  return (
    <div className="App">
      <h1>Total : {total}</h1>
      <h3>Names : {names.join(", ")}</h3>
      <SortedList list={names} sortFunc={sortFunc} />
      <button onClick={() => setCount1(count1 + 1)}>Jumlah1 : {count1}</button>
      <button onClick={() => setCount2(count2 + 1)}>Jumlah2 : {count2}</button>
      <h3>Total : {countTotal}</h3>
    </div>
  );
}

export default App;
