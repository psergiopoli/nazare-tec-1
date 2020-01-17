import { Repository, EntityRepository } from "typeorm";
import { PessoaEntity } from "../model";

@EntityRepository(PessoaEntity)
export class PessoaRepository extends Repository <PessoaEntity>{}