import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as logger from "morgan";

import { connectDatabase } from "./config/db";

import { routerUser } from "./route/user";
import { routerDebut } from "./route/debut";

export const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logger("dev"));

connectDatabase();

app.use("/user", routerUser);
app.use("/debut", routerDebut);
app.use("/", (req, res) => res.send("API application julius"));
