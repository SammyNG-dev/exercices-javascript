function FaitColumn({fait}) {
  return (
    <article className="todo-column">
      <header className="header-todo-column">Fait</header>
      {fait.length > 0 ? (
        <ul>
          {fait.map((task) => {
            return <li key={task.id}>{task.name}</li>;
          })}
        </ul>
      ) : null}
    </article>
  );
}

export default FaitColumn