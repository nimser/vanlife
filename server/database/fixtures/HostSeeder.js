const AbstractSeeder = require("./AbstractSeeder");

class HostSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "host", truncate: true });
  }

  // The run method - Populate the 'host' table with fake data

  run() {
    // Generate and insert fake data into the 'host' table
    for (let i = 0; i < 10; i += 1) {
      // Generate fake host data
      const fakeHost = {
        email: this.faker.internet.email(), // Generate a fake email using faker library
        password: this.faker.internet.password(), // Generate a fake password using faker library
        refName: `host_${i}`, // Create a reference name for the host
      };

      // Insert the fakeHost data into the 'host' table
      this.insert(fakeHost); // insert into host(email, password) values (?, ?)
    }
  }
}

// Export the HostSeeder class
module.exports = HostSeeder;
