import { createConnection, ConnectionOptions } from 'typeorm';

const connectionConfig: ConnectionOptions = {
	type: "mssql",
	host: "lifeworkssql.database.windows.net",
	username: "lifeworks_main",
	password: "zj8ErmFJVMN1v9g585nbt",
	database: "lifeworks",
	synchronize: true,
	logging: false,
  entities: [],
	options: {
	  encrypt: true
	}
}

const craftConfig = (entityRepo) => {
  let config = connectionConfig;
  config.entities.push(entityRepo);
  return config;
}

export const connection = (entity) => createConnection(craftConfig(entity));