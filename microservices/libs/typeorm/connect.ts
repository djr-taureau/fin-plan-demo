import 'reflect-metadata';
import { createConnection, ConnectionOptions } from 'typeorm';
import {
	Account,
	ActivityLog,
	ClientTeamMember,
	Client,
	FirmStaff,
	Firm,
	Notification,
	Permission,
	Role,
	User,
} from '../domain-entities';

const connectionConfig: ConnectionOptions = {
	type: 'mssql',
	host: process.env.SQL_HOST,
	username: process.env.SQL_UID,
	password: process.env.SQL_PWD,
	database: process.env.SQL_DB,
	synchronize: (process.env.SQL_SYNC as any) || false,
	logging: false,
	entities: [
		Account,
		ActivityLog,
		ClientTeamMember,
		Client,
		FirmStaff,
		Firm,
		Notification,
		Permission,
		Role,
		User
	],
	options: {
		encrypt: true
	}
};

createConnection(connectionConfig);
