'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TaskAssigns', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Organization: {
        allowNull: false,
        type: Sequelize.STRING
      },
      TaskStatus: {
        allowNull: false,
        type: Sequelize.STRING
      },
      InvolvedUser: {
        allowNull: false,
        type: Sequelize.STRING
      },
      Deadline: {
        allowNull: false,
        type: Sequelize.STRING
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      createdBy: {
        allowNull: false,
        type: Sequelize.STRING
      },
      deletedBy: {
        allowNull: false,
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TaskAssigns');
  }
};