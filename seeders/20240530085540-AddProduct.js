"use strict";

/** @type {import('sequelize-cli').Migration} */
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
    await queryInterface.bulkInsert("Products", [
      {
        name: "Baju Koko",
        price: 125000,
        desc: "Product 1 desc",
        stock: 10,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Celana Panjang Pria",
        price: 2000,
        desc: "Product 2 desc",
        stock: 10,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sepatu Sneakers",
        price: 3000,
        desc: "Product 3 desc",
        stock: 10,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Baju Dalam Pria",
        price: 4000,
        desc: "Product 4 desc",
        stock: 10,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Celana Dalam Pria",
        price: 4000,
        desc: "Product 4 desc",
        stock: 10,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Products", null, {});
  },
};
