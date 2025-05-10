import { useCallback, useState } from "react";
import Search from "./Search.";

const dataUser = ["Azqi", "Reza", "Andi"];
const UseCallBack = () => {
  const [users, setUsers] = useState(dataUser);
  const [count, setCount] = useState(1);

  const handleSearch = useCallback((text) => {
    const filteredUsers = dataUser.filter((user) => {
      return user.toLowerCase().includes(text.toLowerCase())});
    setUsers(filteredUsers);
  },[]);

  const shuffle = (arr) => {
    setUsers([...arr].sort(() => 0.5 - Math.random()));
  };

  return (
    <div>
      <div className="count">
        <h4>Count : {count}</h4>
        <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
      </div>
      <Search onChange={handleSearch} />
      <div className="users">
        {users.map((user, i) => {
          return <li key={i}>{user}</li>;
        })}
        <button onClick={() => shuffle(dataUser)}>Shuffle</button>
      </div>
    </div>
  );
};

export default UseCallBack;
