import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetch("/names.json")
      .then((response) => response.json)
      .then((data) => setNames(data));
  }, []);

  const [seletedNameDetails, setSeletedNameDetails] = useState(null);

  const onSeletedNameChange = (name) => {
    fetch(`/${name}.json`)
      .then((response) => response.json())
      .then((data) => setSeletedNameDetails(data));
  };

  return (
    <div className="App">
      {names.map((name) => (
        <button onClick={() => onSeletedNameChange(name)}>{name}</button>
      ))}
      <div>{JSON.stringify(seletedNameDetails)}</div>
    </div>
  );
}

export default App;
