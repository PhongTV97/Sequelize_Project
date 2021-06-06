import Sequelize from "sequelize";
import database from "../database/db.js";

const Employees = database.define('employees', {
    id: {
        // Sequelize module has INTEGER Data_Type.
        type: Sequelize.INTEGER,
        // Sequelize module has INTEGER Data_Type.
        autoIncrement:true,
        // user_id can not be null.
        allowNull:false,
        // For uniquely identify user.
        primaryKey:true
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    phone_number: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    address: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    photo: {
        type: Sequelize.STRING,
        allowNull: true,
    }
});

export default Employees;