import { ArgsType, Field, Int } from "type-graphql";
import { Min } from "class-validator";

@ArgsType()
export class PessoaArgs {
    @Field(type => Int)
    @Min(1)
    id: number;
}