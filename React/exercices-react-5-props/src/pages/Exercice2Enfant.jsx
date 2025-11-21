function Exercice2Enfant({ users }) {
  return (
    <>
      {users.map((user) => {
        return (
          <h1
            key={user.id}
          >{`Je m'appelle ${user.nom} et j'ai ${user.age}.`}</h1>
        );
      })}
    </>
  );
}

export default Exercice2Enfant