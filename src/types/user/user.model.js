'use strict';
module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'User',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            email: {
                type: DataTypes.STRING
            },
            name: {
                type: DataTypes.STRING
            },
            password: {
                type: DataTypes.STRING
            },
            reg_date: {
                type: DataTypes.DATE
            },
            birthday:{
                type: DataTypes.DATE
            }
        }, {
            freezeTableName: true,
            timestamps: false
        }
    );
};
