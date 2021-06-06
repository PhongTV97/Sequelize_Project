import Sequelize from "sequelize";
import database from "../database/db.js";

const Accounts = database.define('accounts', {
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
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    pass_word: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    access_token: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    create_time_access_token: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    expried_time_access_token: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    refresh_token: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    create_time_refresh_token: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    expried_time_refresh_token: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    role: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});

export default Accounts;