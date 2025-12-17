const middleware = (req, res, next) => {
  console.log("[MIDDLEWARE]", req.method, req.url);
  next();
};

export { middleware };
