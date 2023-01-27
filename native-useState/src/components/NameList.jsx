import React, { useState } from "react";

const NameList = () => {
  const [list, setList] = useState([
    "kartono",
    "ayub",
    "aris",
    "hamid",
    "lufi",
  ]);

  const [inputName, setInputName] = useState("");

  function onAddName() {
    setList([...list, inputName]);
    setInputName("");
  }

  return (
    <div className="list">
      {/* List Nama */}
      <h3>List Nama</h3>
      <ul>
        {list.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      {/* input nama */}
      <input
        type="text"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />

      <button onClick={onAddName}>Tambah</button>
    </div>
  );
};

export default NameList;
