const { sequelize } = require(".");
const { DataTypes } = require("sequelize/types");
const config = require("../config/config");

module.exports= (sequelize, DataTypes) => {
    const alias = "user";

    const cols = {
        id_user:{
            type: DataTypes.INTERGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name:{
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        surname:{
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING(100),
            allowNull: false,        
        },
        password:{
            type: DataTypes.STRING(20),
            allowNull: false,
        }
    };

    const config = {
        tableName : "users"
    };
    
    sequelize.define(alias, cols, config);
}