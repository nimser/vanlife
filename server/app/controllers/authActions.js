const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const host = req.user;
  const verified = await argon2.verify(host.hashed_password, req.body.password);
  if (!verified) {
    return res.sendStatus(422);
  }

  delete host.hashed_password;
  const token = jwt.sign({ sub: host.id }, process.env.APP_SECRET, {
    expiresIn: "1h",
  });

  return res.json({ host, token });
};

module.exports = { login };
