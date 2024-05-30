"use strict";

const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
}

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const hashedPassword = await hashPassword("123");
    
    await queryInterface.bulkInsert(
      "users",
      [
        {
          username: "admin",
          email: "admin@gmail.com",
          password: hashedPassword,
          role: "ADMIN",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "seller",
          email: "seller@gmail.com",
          password: hashedPassword,
          role: "SELLER",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
