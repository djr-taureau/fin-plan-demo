import 'reflect-metadata';
import { createConnection, ConnectionOptions } from 'typeorm';
import {
	Address,
	ClientAccount,
	ClientAffiliation,
	ClientRelationship,
	ClientMember,
	Profile,
	Settings,
	ProfileAttribute,
	ContactInformation,
	SystemUser,
	SystemPermission,
	SystemRole,
	Firm,
	BillingAccount,
	FirmClient,
	TeamMember,
	FirmStaffCertification,
	FirmCertification,
	FirmStaff,
	Templates,
	TaxationCategory,
	TaxationRule,
	IncomeAdjustments,
	IncomeAdjustmentValue,
	IncomeClassification,
	IncomeClassificationGroup,
	EntityIncome,
	Country,
	Organization,
	Relationship,
	RelationshipAttribute,
	RelationshipDefinition,
	SystemTool,
	SystemToolResult,
	SystemUserRole,
	ActivityLog,
	Notification
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
		ActivityLog,
		Notification,
		Address,
		ClientAccount,
		ClientAffiliation,
		ClientRelationship,
		ClientMember,
		Settings,
		Profile,
		ProfileAttribute,
		ContactInformation,
		SystemUser,
		SystemPermission,
		SystemRole,
		Firm,
		BillingAccount,
		FirmClient,
		TeamMember,
		FirmStaffCertification,
		FirmCertification,
		FirmStaff,
		Templates,
		TaxationCategory,
		TaxationRule,
		IncomeAdjustments,
		IncomeAdjustmentValue,
		IncomeClassification,
		IncomeClassificationGroup,
		EntityIncome,
		Country,
		Organization,
		Relationship,
		RelationshipAttribute,
		RelationshipDefinition,
		SystemTool,
		SystemToolResult,
		SystemUserRole,
	],
	options: {
		encrypt: true
	}
};

createConnection(connectionConfig);
