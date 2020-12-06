import { createConnection } from "typeorm";

export const connectDatabase = async () => {
  const connection = await createConnection();
  console.log(`DB ${connection.options.database} connected`);

  process.on("SIGINT", () => {
    connection.close().then(() => console.log("DB disconnected"));
  });
};
