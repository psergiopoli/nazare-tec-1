import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class Pessoa {

    @Field(type => ID)
    id: number;

    @Field()
    name: string;

    @Field()
    lastname: string;

}