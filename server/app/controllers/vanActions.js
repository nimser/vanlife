// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all vans from the database
    const vans = await tables.van.readAll();

    // Respond with the vans in JSON format
    res.json(vans);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific van from the database based on the provided ID
    const van = await tables.van.read(req.params.id);

    // If the van is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the van in JSON format
    if (van == null) {
      res.sendStatus(404);
    } else {
      res.json(van);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the van data from the request body
  const van = req.body;

  try {
    // Insert the van into the database
    const insertId = await tables.van.create(van);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted van
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  // edit,
  add,
  // destroy,
};
