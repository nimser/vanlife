const argon2 = require("argon2");
const tables = require("../../database/tables");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

// eslint-disable-next-line consistent-return
const verifyHost = async (req, res, next) => {
  // vérifier que les données envoyées via le POST correspondent à un user existant
  try {
    const host = await tables.host.readWithPassword(req.body.email);

    if (!host) {
      return res.sendStatus(422);
    }

    req.user = host;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = { hashingOptions, verifyHost };
