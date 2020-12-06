import { getManager } from "typeorm";
import { Debut } from "../entity/Debut";

export class DebutController {
    async save(debut: Debut) {
        const saved = getManager().save(debut);
        return saved;
    }
}
