import Sequelize from "sequelize";
import database from "../database/db.js";

const Supplies = database.define('supplies', {
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
    company_name: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    phone_office: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    address: {
        type: Sequelize.STRING,
        allowNull: true,
    },
});

export default Supplies;