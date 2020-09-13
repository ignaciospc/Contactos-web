const { sequelize } = require(".");
const { DataTypes } = require("sequelize/types");
const config = require("../config/config");

module.exports= (sequelize, DataTypes) => {
    const alias = "contact";

    const cols = {
        id_contac:{
            type: DataTypes.INTERGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name:{
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        phone:{
            type: DataTypes.STRING(25),
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING(100),   
            allowNull: false,         
        } 
    };

    const config = {
        tableName : "contacts"
    };
    
    sequelize.define(alias, cols, config);
}