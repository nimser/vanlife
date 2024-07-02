const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const vans = await tables.van.readAll();

    res.json(vans);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const van = await tables.van.read(req.params.id);

    if (van == null) {
      res.sendStatus(404);
    } else {
      res.json(van);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const van = req.body;

  try {
    const insertId = await tables.van.create(van);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  add,
};
