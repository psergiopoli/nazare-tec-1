import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("pessoa")
export class PessoaEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 200})
    name: string;

    @Column({length: 155})
    lastname: string;

}