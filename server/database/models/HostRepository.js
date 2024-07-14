const AbstractRepository = require("./AbstractRepository");

class HostRepository extends AbstractRepository {
  constructor() {
    super({ table: "host" });
  }

  async getVans(hostId) {
    const [rows] = await this.database.query(
      `SELECT * FROM van WHERE host_id = ?`,
      [hostId]
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
