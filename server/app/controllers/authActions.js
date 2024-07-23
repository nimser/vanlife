const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const dayjs = require("dayjs");

const login = async (req, res) => {
  const host = req.user;
  const verified = await argon2.verify(host.hashed_password, req.body.password);
  if (!verified) {
    return res.sendStatus(422);
  }

  delete host.hashed_password;
  const token = jwt.sign({ sub: host.id }, process.env.APP_SECRET, {
    expiresIn: "1y",
  });

  res.cookie("auth_token", token, {
    secure: process.env.NODE_ENV !== "development",
    httpOnly: true,
    expires: dayjs().add(30, "days").toDate(),
  });

  return res.json({ host });
};

const loginSuccess = ({ res }) => res.sendStatus(200);

const logout = ({ res }) => res.clearCookie("auth_token").sendStatus(200);

module.exports = { login, loginSuccess, logout };
