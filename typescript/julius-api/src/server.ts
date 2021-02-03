import { app } from "./app";

const PORT = 3333;

const server = app.listen(PORT, () => `Listening port ${PORT}`);

process.on("SIGINT", () => {
    server.close();
    console.log("Application closed");
});
