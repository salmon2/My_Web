module.exports = (sequelize, DataTypes) => {
  return sequelize.define('user',    {
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
    stnum: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    major: {
        type: DataTypes.STRING,
        allowNull: false
    }
  })
};