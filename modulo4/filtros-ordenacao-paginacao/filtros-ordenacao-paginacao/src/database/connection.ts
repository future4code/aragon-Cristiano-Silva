import knex from "knex"; //knex por meio de javaScript unifica a forma de querys para os banco sql, mais utilizado no node.jss
import dotenv from "dotenv";

dotenv.config();

const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      multipleStatements: true
   },
});

export default connection