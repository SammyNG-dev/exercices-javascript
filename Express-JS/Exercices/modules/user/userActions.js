const getUser = (req, res, next) => {
  res.status(200).json({ pseudo: "Sam23", age: 25 });
};

const createUser = (req, res, next) => {
  const { pseudo, age } = req.body;
  res.status(201).json({ pseudo: pseudo, age: age });
};

export { getUser, createUser };
