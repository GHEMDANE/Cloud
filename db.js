const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  '', cloud_xgoa // Database name
  '',clouduser // User
  '', rPFT1oNxllecrqR9rD04rvDQ5CoOkqlD // Password
  {
    host: '', dpg-ck9d0fv0vg2c73d10gag-a // Host
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
