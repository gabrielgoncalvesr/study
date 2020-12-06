import { Router } from "express";
import { UsuarioController } from "../controller/UserController";
import { User } from "../entity/User";

export const routerUser = Router();
const userController = new UsuarioController();

routerUser.get("/", async (req, res) => {
    const users = await userController.list();
    res.json(users);
});

routerUser.post("/", async (req, res) => {
    const { name, email } = req.body;

    const user = new User(name, email);

    const savedUser = await userController.save(user);
    res.json(savedUser);
});

routerUser.get('/debut/:userId', async (req, res) => {
    const userId = parseInt(req.params.userId);

    const debuts = await userController.listDebut(userId);

    res.json(debuts);
});