const middleware = (req, res, next) => {
  console.log("[MIDDLEWARE]", req.method, req.url);
  next();
};

const validateCreateUser = (req, res, next) => {
  try {
    const { name } = req.body;
    if (typeof name === "string" && name.trim().length > 0) {
      next();
    } else {
      res.status(400).json({ message: "Entrez un nom." });
    }
  } catch (err) {
    next(err);
  }
};

const validateUserId = (req, res, next) => {
  try {
    const id = Number.parseInt(req.params.id, 10);
    if (id > 0) {
      next();
    } else {
      res.status(400).json({ message: "ID non valide" });
    }
  } catch (err) {
    next(err);
  }
};

export { middleware, validateCreateUser, validateUserId };
