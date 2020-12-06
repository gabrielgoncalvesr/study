import { Router } from "express";
import { DebutController } from "../controller/DebutController";
import { UsuarioController } from "../controller/UserController";
import { Debut } from "../entity/Debut";

export const routerDebut = Router();
const userController = new UsuarioController();
const debutController = new DebutController();

// routerUser.get("/", async (req, res) => {
//     const users = await userController.list();
//     res.json(users);
//   });

routerDebut.post("/", async (req, res) => {
    const { value, description, date, userId } = req.body;

    const user = await userController.getById(userId);
    if (user) {
        const debut = new Debut(value, description, date, user);
        const debutSaved = await debutController.save(debut);

        res.json(debutSaved);
    } else {
        res.status(404).json({ message: "User not found" });
    }
});
