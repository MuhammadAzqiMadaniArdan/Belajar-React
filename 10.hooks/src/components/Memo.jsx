import { memo, useState } from "react";

const TodoList = memo((props) => {
  const { todos } = props;
  console.log("call todos");
  return (
    <>
      {todos.map((todo, i) => {
        return <p key={i}>{todo}</p>;
      })}
    </>
  );
});

TodoList.displayName = "TodoList";

const CounterCounditional = memo((props) => {
  const { count } = props;
  console.log("call Counter");
  return (
    <div>
      <h4>Counter MAChiiiinE : {count}</h4>
    </div>
  );
},() => false);

const Counter = memo((props) => {
  const { count } = props;
  console.log("call Counter");
  return (
    <div>
      <h4>Counter MAChiiiinE : {count}</h4>
    </div>
  );
});

const Memo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["Coding", "Cooking"]);
  function counter() {
    setCount((count) => (count + 1));
  }

  function addTodo(newTodos) {
    setTodos((todo) => [...todo, newTodos]);
  }
  return (
    <div className="container">
      <div className="counter">
        <Counter count={count} />
        <button onClick={counter}>Increment Bos</button>
      </div>
      <div className="todos">
        <TodoList todos={todos} />
        <button onClick={() => addTodo("Learning Piano")}>Tambah todos</button>
      </div>
    </div>
  );
};
export default Memo;
