const AbstractRepository = require("./AbstractRepository");

class HostRepository extends AbstractRepository {
  constructor() {
    super({ table: "host" });
  }

  async getVans(hostId) {
    const [rows] = await this.database.query(
      `select * from van where host_id = ?`,
      [hostId]
    );

    return rows;
  }

  async getVan(hostId, vanId) {
    const [rows] = await this.database.query(
      `select * from van where host_id = ? and id = ?`,
      [hostId, vanId]
    );

    return rows;
  }

  async readWithPassword(email) {
    const [[firstRow]] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE email = ?`,
      [email]
    );

    return firstRow;
  }
}

module.exports = HostRepository;
