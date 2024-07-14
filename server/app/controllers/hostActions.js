const tables = require("../../database/tables");

const browseVans = async (req, res, next) => {
  try {
    const vans = await tables.host.getVans(req.auth.sub);

    res.json(vans);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browseVans,
};
