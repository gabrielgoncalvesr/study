import { getManager } from "typeorm";
import { User } from "../entity/User";

export class UsuarioController {
    async save(user: User) {
        const savedUser = await getManager().save(user);
        return savedUser;
    }

    async list() {
        const users = await getManager().find(User);
        return users;
    }

    async getById(id: number) {
        const user = await getManager().findOne(User, id);
        return user;
    }

    async listDebut(id: number) {
        const user = await getManager().findOne(User, id, {
            relations: ["debuts"],
        });
        return user.debuts;
    }
}
