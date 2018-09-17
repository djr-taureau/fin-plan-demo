import 'reflect-metadata';
import { createConnection, ConnectionOptions } from 'typeorm';
import {
	ClientAccount,
	ClientAffiliation,
	ClientRelationship,
	ClientMember,
	Profile,
	ProfileAttribute,
	ProfileContactInformation,
	SystemUser,
	SystemPermission,
	SystemRole,
	Firm,
	FirmAccount,
	FirmClient,
	FirmClientTeamMember,
	FirmStaffCertification,
	FirmCertification,
	FirmStaff,
} from '../domain-entities';



const connectionConfig: ConnectionOptions = {
	type: 'mssql',
	host: process.env.SQL_HOST,
	username: process.env.SQL_UID,
	password: process.env.SQL_PWD,
	database: process.env.SQL_DB,
	synchronize: (process.env.SQL_SYNC) as any || false,
	logging: false,
	entities: [
		ClientAccount,
		ClientAffiliation,
		ClientRelationship,
		ClientMember,
		Profile,
		ProfileAttribute,
		ProfileContactInformation,
		SystemUser,
		SystemPermission,
		SystemRole,
		Firm,
		FirmAccount,
		FirmClient,
		FirmClientTeamMember,
		FirmStaffCertification,
		FirmCertification,
		FirmStaff
	],
	options: {
		encrypt: true
	}
};

createConnection(connectionConfig);
