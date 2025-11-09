import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Exercice5() {
  const [users, setUsers] = useState(null);
  const [count, setCount] = useState(5);
  const [show, setShow] = useState(true);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev === 1) {
          setShow(!show);
          return prev;
        }
        return prev - 1;
      });
    }, 1000);

    const timeOut = setTimeout(() => {
      setUsers([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" },
      ]);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeOut);
    };
  }, []);
  return (
    <>
      {show && <h1>{count}</h1>}
      {users && (
        <ul>
          {users.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })}
        </ul>
      )}
      <Link to="/" className="link">
        Revenir en arrière
      </Link>
    </>
  );
}

export default Exercice5;
