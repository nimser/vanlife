const tables = require("../../database/tables");

const browseVans = async (req, res, next) => {
  try {
    const vans = await tables.host.getVans(req.auth.sub);

    res.json(vans);
  } catch (err) {
    next(err);
  }
};

const readVan = async (req, res, next) => {
  const { host_id: hostId, van_id: vanId } = req.params;
  try {
    const vans = await tables.host.getVan(hostId, vanId);

    if (vans.length === 0) {
      res.sendStatus(404);
    }

    res.json(vans[0]);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browseVans,
  readVan,
};
