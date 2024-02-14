const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.MYSQL_URI);

sequelize.authenticate();

console.log("DB is working");

module.exports = sequelize;

const dbConnect = async () => {
  const connect = await mongoose.connect(process.env.MONGODB_URI);
  console.log(
    `MongoDB connected to db: ${connect.connection.name}`.BgGreen.bold
  );
};
module.exports = dbConnect;
