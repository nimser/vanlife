const argon2 = require("argon2");
const AbstractSeeder = require("./AbstractSeeder");
const { hashingOptions } = require("../../app/services/auth");

class HostSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "host", truncate: true });
  }

  // The run method - Populate the 'host' table with fake data

  async run() {
    // Generate fake host data
    const fakeHosts = Array.from({ length: 10 }, (_, i) => {
      const email = this.faker.internet.email();
      return {
        email,
        refName: `host_${i}`,
      };
    });

    // Hash all passwords concurrently
    const hashedPasswords = await Promise.all(
      fakeHosts.map((host) => argon2.hash(host.email, hashingOptions))
    );

    // Combine the data and insert into the database
    fakeHosts.forEach((host, index) => {
      const fakeHost = {
        ...host,
        hashed_password: hashedPasswords[index],
      };
      this.insert(fakeHost);
    });
  }
}

// Export the HostSeeder class
module.exports = HostSeeder;
