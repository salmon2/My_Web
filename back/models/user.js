module.exports = (sequelize, DataTypes) => {
  return sequelize.define('user',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nickname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    stdnum: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    major: {
        type: DataTypes.STRING,
        allowNull: false
    }
  })
};