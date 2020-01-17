import { AppService } from "src/app.service";
import { Pessoa } from "../model/pessoa";
import { NotFoundException } from "@nestjs/common";
import { Args, Resolver, Query, ResolveProperty, Parent } from "@nestjs/graphql";
import { PessoaEntity } from "src/model";
import { PessoaArgs } from "../pessoa.args";

@Resolver(of => Pessoa)
export class PessoaResolver {

    constructor(private readonly appService: AppService) {}

    @Query(returns => Pessoa)
    async pessoa(@Args() args: PessoaArgs): Promise<Pessoa> {
      console.log(`M=pessoa id=${args.id}`);
      const pessoa: PessoaEntity = await this.appService.findPessoa(args.id);
      if (!pessoa) {
        throw new NotFoundException(args);
      }
      
      return pessoa;
    }

    @ResolveProperty()
    fullname(@Parent() pessoa: Pessoa): string {
      return `${pessoa.name} ${pessoa.lastname}`;
    }

    @ResolveProperty(returns => Pessoa)
    async bestFriend(@Parent() pessoa: Pessoa): Promise<Pessoa> {
      console.log(`M=bestFriend id=${pessoa.id}`);
      const bestFriendId: number = pessoa.id + 1;
      const bestFriend: PessoaEntity = await this.appService.findPessoa(bestFriendId);
      if (!bestFriend) {
        throw new NotFoundException(bestFriendId);
      }
      
      return bestFriend;
    }
}