import "dotenv/config";
import app from "./app.js";
import sequelize from "./sequelize.js";
// PORT
const port = process.env.PORT || 3000;

// Starting a server
async function start() {
  await sequelize.sync();

  app.listen(8080, () => {
    console.log("Server started on port 8080");
  });
}

start();
