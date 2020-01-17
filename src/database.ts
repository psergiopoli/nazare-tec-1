import { DynamicModule } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import * as models from './model';
import * as repositories from './repository';

export function ModelsArray() {
  return Object.values(models);
}

export function RepositoriesArray() {
  return Object.values(repositories);
}

export function DatabaseConf(): TypeOrmModuleOptions & Partial<MysqlConnectionOptions> {
  return {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password:'root',
    database: 'nazare_1',
    entities: ModelsArray(),
    migrationsRun: false,
    synchronize: true, // Database update automatically,
    logging: false, // Log sql statements
  };
}

export function DatabaseModule(): DynamicModule {
  return TypeOrmModule.forRoot(DatabaseConf());
}

export function Models(): DynamicModule {
  return TypeOrmModule.forFeature([...ModelsArray(), ...RepositoriesArray()]);
}