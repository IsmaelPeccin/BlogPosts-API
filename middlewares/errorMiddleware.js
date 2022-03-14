const errorMiddleware = (error, _req, res, _next) => {
  console.log(error);

  return res.status(500).json('Internal Server Error').end();
};

module.exports = errorMiddleware;