import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Debut } from "./Debut";

@Entity()
export class User {
    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @OneToMany(() => Debut, debut => debut.user)
    debuts: Debut[]
}
