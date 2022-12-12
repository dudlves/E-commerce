import sqlite3 from "sqlite3";
import path from "path";
const caminhoArq = path.resolve("./src/database/", "database.db");

const bd = new sqlite3.Database(caminhoArq);
process.on("SIGINT", () =>
  bd.close(() => {
    console.log("BD encerrado!");
    process.exit(0);
  })
);

export default bd;
