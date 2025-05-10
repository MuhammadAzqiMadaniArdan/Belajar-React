import { useMemo, useState } from "react";

const calculation = (num) => {
  console.log("call Calculation");
  for (let i = 0; i < 1000000; i++) {
    num += 1;
  }
  return num;
};

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const result = useMemo (() => calculation(count),[count]);

  const counter = () => {
    setCount((count) => count + 1);
  };

  const addTodos = () => {
    setTodos(() => [...todos, "New Todos"]);
  };

  return (
    <div className="container">
      <h3>Counter : {count}</h3>
      <button onClick={ counter}>+</button>
      <h4>Calculation : {result}</h4>
      <hr />
      <h3>Add Todos</h3>
      {todos.map((todo, i) => {
        return <p key={i}>{todo}</p>;
      })}
      <button onClick={addTodos}>Tambah todos</button>
    </div>
  );
};

export default UseMemo;
