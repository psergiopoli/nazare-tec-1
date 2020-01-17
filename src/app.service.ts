import { Injectable } from '@nestjs/common';
import { PessoaRepository } from './repository/pessoa.repository';
import { PessoaEntity } from './model';

@Injectable()
export class AppService {

  constructor(private readonly pessoaRepository: PessoaRepository) {}

  getHello(): string {
    return 'Hello World!';
  }

  findPessoa(id: number): Promise<PessoaEntity> {
    return this.pessoaRepository.findOne(id);
  }
}
