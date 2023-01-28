import { useReducer } from "react";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_NAME":
          return { ...state, name: action.payload };
        case "ADD_NAME":
          return {
            ...state,
            names: [...state.names, state.name],
            name: "",
          };
      }
    },
    {
      names: [],
      name: "",
    }
  );

  return (
    <div className="container">
      <h2>List Name</h2>
      <ul>
        {state.names.map((name, index) => (
          // <div key={index}>{name}</div>
          <li key={index}>{name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={state.name}
        placeholder="Enter Name"
        onChange={(e) =>
          dispatch({ type: "SET_NAME", payload: e.target.value })
        }
      />
      <button onClick={() => dispatch({ type: "ADD_NAME" })}>Add Name</button>
    </div>
  );
}

export default App;
