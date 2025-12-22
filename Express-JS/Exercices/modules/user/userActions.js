import UserRepository from "./UserRepository.js";

const getUserById = (req, res, next) => {
  try {
    const id = Number.parseInt(req.params.id, 10);
    const userById = UserRepository.readUserById(id);
    console.log(userById);
    if (userById) {
      res.status(200).json(userById);
    } else {
      res.status(404).json({ message: "Utilisateur non trouvé" });
    }
  } catch (e) {
    next(e);
  }
};

const createUser = (req, res, next) => {
  try {
    const { name } = req.body;
    if (typeof name === "string" && name.length > 0) {
      const userCreated = UserRepository.createUser(name);
      res.status(201).json(userCreated);
    } else {
      res.status(400).json({ message: "Données non valides." });
    }
  } catch (e) {
    next(e);
  }
};

const browseUsers = (req, res, next) => {
  try {
    const allUsers = UserRepository.getAllUsers();
    if (allUsers.length > 0) {
      res.status(200).json(allUsers);
    } else {
      res.status(404).json({ message: "Aucun utilisateur" });
    }
  } catch (e) {
    next(e);
  }
};

export { getUserById, createUser, browseUsers };
