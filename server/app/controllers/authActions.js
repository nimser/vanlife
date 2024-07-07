const login = (req, res) => {
  res.status(422).json({ message: "Unauthorized login" });
};

module.exports = { login };
