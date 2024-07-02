const AbstractRepository = require("./AbstractRepository");

class VanRepository extends AbstractRepository {
  constructor() {
    // Call the constructor of the parent class (AbstractRepository)
    // and pass the table name "van" as configuration
    super({ table: "van" });
  }

  // The C of CRUD - Create operation

  async create(van) {
    // Execute the SQL INSERT query to add a new van to the "van" table
    const [result] = await this.database.query(
      `insert into ${this.table} (title, host_id) values (?, ?)`,
      [van.title, van.host_id]
    );

    // Return the ID of the newly inserted van
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific van by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the van
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all vans from the "van" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of vans
    return rows;
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing van

  // async update(van) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an van by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = VanRepository;
