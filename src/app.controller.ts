import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { PessoaEntity } from './model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return {
      Hello: "World"
    };
  }

  @Get("pessoa/:id")
  getPessoa(@Param("id") id: number): Promise<PessoaEntity> {
    return this.appService.findPessoa(id);
  }
}
