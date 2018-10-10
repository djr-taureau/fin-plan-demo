import {MigrationInterface, QueryRunner} from "typeorm";

export class initialSetup1538096095583 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "activity-logs" ("guid" uniqueidentifier NOT NULL CONSTRAINT "DF_87276c22c7f6973f9d6cb65fa33" DEFAULT NEWSEQUENTIALID(), "message" nvarchar(255) NOT NULL, "occurrence" datetime NOT NULL, CONSTRAINT "PK_87276c22c7f6973f9d6cb65fa33" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "system-permissions" ("guid" uniqueidentifier NOT NULL CONSTRAINT "DF_939f96f61fced45232d1203aeca" DEFAULT NEWSEQUENTIALID(), "createdOn" datetime2 NOT NULL CONSTRAINT "DF_584d8665ff1ed393b0ce782f90a" DEFAULT getdate(), "modifiedOn" datetime2 NOT NULL CONSTRAINT "DF_f184b9a47fb63d374506e823af5" DEFAULT getdate(), "name" nvarchar(255) NOT NULL, "description" text NOT NULL, "scope" int NOT NULL, CONSTRAINT "UQ_208e99e7a812d315881a33fb970" UNIQUE ("name"), CONSTRAINT "PK_939f96f61fced45232d1203aeca" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE INDEX "IDX_797abf10a90a3306603fbf46bc" ON "system-permissions"("scope") `);
        await queryRunner.query(`CREATE TABLE "roles" ("guid" uniqueidentifier NOT NULL CONSTRAINT "DF_1383579bcd1ada110e9dd76bedf" DEFAULT NEWSEQUENTIALID(), "createdOn" datetime2 NOT NULL CONSTRAINT "DF_42902dcf7f071491ce1d6eaf040" DEFAULT getdate(), "modifiedOn" datetime2 NOT NULL CONSTRAINT "DF_e99982e9133bd9606dce01e283e" DEFAULT getdate(), "displayName" nvarchar(255) NOT NULL, "name" nvarchar(255) NOT NULL, "description" nvarchar(255) NOT NULL, "scope" int NOT NULL, CONSTRAINT "PK_1383579bcd1ada110e9dd76bedf" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "profile-attributes" ("createdOn" datetime2 NOT NULL CONSTRAINT "DF_ecce0d0bce73246ee7ee7e73b97" DEFAULT getdate(), "modifiedOn" datetime2 NOT NULL CONSTRAINT "DF_9cbbb2abd0bf4d569978d9d60a7" DEFAULT getdate(), "name" nvarchar(255) NOT NULL, "value" nvarchar(255) NOT NULL, "profileGuid" uniqueidentifier NOT NULL, CONSTRAINT "PK_1ff3c379d11d12ede74bd2c9778" PRIMARY KEY ("name", "profileGuid"))`);
        await queryRunner.query(`CREATE TABLE "profile-contact-information" ("createdOn" datetime2 NOT NULL CONSTRAINT "DF_dddaeac32932ad7f0504345b860" DEFAULT getdate(), "modifiedOn" datetime2 NOT NULL CONSTRAINT "DF_86d7d1cc9af287a0a332f305208" DEFAULT getdate(), "isPrimary" bit NOT NULL, "name" nvarchar(255) NOT NULL, "value" nvarchar(255) NOT NULL, "profileGuid" uniqueidentifier NOT NULL, CONSTRAINT "PK_c0b32a2f8647fef9bdfc5468d3d" PRIMARY KEY ("name", "profileGuid"))`);
        await queryRunner.query(`CREATE TABLE "profiles" ("guid" uniqueidentifier NOT NULL CONSTRAINT "DF_b930e426f55682b5dc18e16f74d" DEFAULT NEWSEQUENTIALID(), "createdOn" datetime2 NOT NULL CONSTRAINT "DF_373108f195a7163e8d6e2ac8398" DEFAULT getdate(), "modifiedOn" datetime2 NOT NULL CONSTRAINT "DF_d4993b93f7283f403414994e3ca" DEFAULT getdate(), "firstName" nvarchar(255), "middleName" nvarchar(255), "lastName" nvarchar(255), "email" nvarchar(255), "gender" int, "dateOfBirth" datetime, "maritalStatus" int, "citizenshipStatus" int, "countryOfOrigin" nvarchar(255), "addressStreet1" nvarchar(255), "addressStreet2" nvarchar(255), "addressStreet3" nvarchar(255), "addressCity" nvarchar(255), "addressStateprovence" nvarchar(255), "addressPostalcode" nvarchar(255), "addressCountry" nvarchar(255), CONSTRAINT "PK_b930e426f55682b5dc18e16f74d" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "system-users" ("guid" uniqueidentifier NOT NULL CONSTRAINT "DF_583cedd331202d5b82953aad0ea" DEFAULT NEWSEQUENTIALID(), "createdOn" datetime2 NOT NULL CONSTRAINT "DF_55960c1cc435443a28879b765fb" DEFAULT getdate(), "modifiedOn" datetime2 NOT NULL CONSTRAINT "DF_b94f5236064a3dd23cbe0903d2f" DEFAULT getdate(), "displayName" nvarchar(255) NOT NULL, "providerId" nvarchar(255), "profileGuid" uniqueidentifier, CONSTRAINT "PK_583cedd331202d5b82953aad0ea" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_26ef62bab7edede12c4898a3ee" ON "system-users"("profileGuid") WHERE "profileGuid" IS NOT NULL`);
        await queryRunner.query(`CREATE TABLE "client-members" ("createdOn" datetime2 NOT NULL CONSTRAINT "DF_790b9985fbe3f8f45cdcf28b282" DEFAULT getdate(), "modifiedOn" datetime2 NOT NULL CONSTRAINT "DF_06e0dfb1e6dae5ec3452b7a1c73" DEFAULT getdate(), "clientAccountGuid" uniqueidentifier NOT NULL, "userGuid" uniqueidentifier NOT NULL, CONSTRAINT "PK_a474696aea3616af0dc2d3935ac" PRIMARY KEY ("clientAccountGuid", "userGuid"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_e87e47fdc6a550f14a8a335e89" ON "client-members"("userGuid") WHERE "userGuid" IS NOT NULL`);
        await queryRunner.query(`CREATE TABLE "client-relationships" ("relationship" int NOT NULL, "fiscallyDependant" bit, "clientAccountGuid" uniqueidentifier NOT NULL, "profileGuid" uniqueidentifier NOT NULL, CONSTRAINT "PK_c9e1a8bfdfca32889101959960c" PRIMARY KEY ("clientAccountGuid", "profileGuid"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_88c14ed59abca9006dfa30f4e2" ON "client-relationships"("profileGuid") WHERE "profileGuid" IS NOT NULL`);
        await queryRunner.query(`CREATE TABLE "client-affiliations" ("guid" uniqueidentifier NOT NULL CONSTRAINT "DF_58cca4fe52f5ffdffb769d4dc6b" DEFAULT NEWSEQUENTIALID(), "relationship" int NOT NULL, "affiliateName" nvarchar(255) NOT NULL, "clientAccountGuid" uniqueidentifier, CONSTRAINT "PK_58cca4fe52f5ffdffb769d4dc6b" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "client-accounts" ("guid" uniqueidentifier NOT NULL CONSTRAINT "DF_74213552613a86999d782f121a2" DEFAULT NEWSEQUENTIALID(), "createdOn" datetime2 NOT NULL CONSTRAINT "DF_13e397e81db444eaafb9711b88b" DEFAULT getdate(), "modifiedOn" datetime2 NOT NULL CONSTRAINT "DF_67cc672dfa7fb70c0f40d412867" DEFAULT getdate(), "displayName" nvarchar(255) NOT NULL, "ownerGuid" uniqueidentifier, CONSTRAINT "PK_74213552613a86999d782f121a2" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_6d90f94acee6c0db3c8135a781" ON "client-accounts"("ownerGuid") WHERE "ownerGuid" IS NOT NULL`);
        await queryRunner.query(`CREATE TABLE "firm-staff-certifications" ("guid" uniqueidentifier NOT NULL CONSTRAINT "DF_43230f8606ea6c53ba40b306b68" DEFAULT NEWSEQUENTIALID(), "createdOn" datetime2 NOT NULL CONSTRAINT "DF_6b9bacd6f199efda142595f4a4b" DEFAULT getdate(), "modifiedOn" datetime2 NOT NULL CONSTRAINT "DF_e4bbdd9f5e1a0ec0c8a3c81ab0b" DEFAULT getdate(), "name" nvarchar(255), "image" nvarchar(255), "memberGuid" uniqueidentifier, CONSTRAINT "PK_43230f8606ea6c53ba40b306b68" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_8e1bdbfd91154a7466e9599873" ON "firm-staff-certifications"("memberGuid") WHERE "memberGuid" IS NOT NULL`);
        await queryRunner.query(`CREATE TABLE "firm-staff" ("guid" uniqueidentifier NOT NULL CONSTRAINT "DF_7380d7b6fe9006bad7b4fbe19ce" DEFAULT NEWSEQUENTIALID(), "createdOn" datetime2 NOT NULL CONSTRAINT "DF_7b507ef3b5df461c906c13c72cb" DEFAULT getdate(), "modifiedOn" datetime2 NOT NULL CONSTRAINT "DF_be98a206e5ab0d71f53fb96e130" DEFAULT getdate(), "firmTitle" nvarchar(255), "biography" nvarchar(255), "crdNumber" nvarchar(255), "firmGuid" uniqueidentifier, "userGuid" uniqueidentifier, CONSTRAINT "PK_7380d7b6fe9006bad7b4fbe19ce" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_fbea7378a22c50fc2037d6b5ad" ON "firm-staff"("userGuid") WHERE "userGuid" IS NOT NULL`);
        await queryRunner.query(`CREATE TABLE "firm-clients" ("guid" uniqueidentifier NOT NULL CONSTRAINT "DF_fd7f3d5fdaa9996e5a69ce5ac0f" DEFAULT NEWSEQUENTIALID(), "createdOn" datetime2 NOT NULL CONSTRAINT "DF_74e723c578674063d6fed403f78" DEFAULT getdate(), "modifiedOn" datetime2 NOT NULL CONSTRAINT "DF_4ea95d0d0d48a4b5c9eaabb3b7f" DEFAULT getdate(), "status" int NOT NULL, "firmGuid" uniqueidentifier, "clientGuid" uniqueidentifier, CONSTRAINT "PK_fd7f3d5fdaa9996e5a69ce5ac0f" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "firm-certifications" ("guid" uniqueidentifier NOT NULL CONSTRAINT "DF_2c87dc566bf34de162f85138b08" DEFAULT NEWSEQUENTIALID(), "createdOn" datetime2 NOT NULL CONSTRAINT "DF_e2f041f045998707fdd3017bb81" DEFAULT getdate(), "modifiedOn" datetime2 NOT NULL CONSTRAINT "DF_32dfed139daeebc44f3ec6dea12" DEFAULT getdate(), "name" nvarchar(255), "image" nvarchar(255), "firmGuid" uniqueidentifier, CONSTRAINT "PK_2c87dc566bf34de162f85138b08" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_465fd28efaf35c28d98eedcf63" ON "firm-certifications"("firmGuid") WHERE "firmGuid" IS NOT NULL`);
        await queryRunner.query(`CREATE TABLE "firms" ("guid" uniqueidentifier NOT NULL CONSTRAINT "DF_7bfd4ed8b8987faa8f0e0ba1082" DEFAULT NEWSEQUENTIALID(), "createdOn" datetime2 NOT NULL CONSTRAINT "DF_643659ca16319a5209f376dc095" DEFAULT getdate(), "modifiedOn" datetime2 NOT NULL CONSTRAINT "DF_63901bc34fc0f400008ac040961" DEFAULT getdate(), "displayName" nvarchar(255) NOT NULL, "crdNumber" nvarchar(255), "accountGuid" uniqueidentifier, CONSTRAINT "PK_7bfd4ed8b8987faa8f0e0ba1082" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "firm-accounts" ("guid" uniqueidentifier NOT NULL CONSTRAINT "DF_294ac805dc16e7f2e6ec1248e3d" DEFAULT NEWSEQUENTIALID(), "createdOn" datetime2 NOT NULL CONSTRAINT "DF_a27bbaca80f1325fa01584161a6" DEFAULT getdate(), "modifiedOn" datetime2 NOT NULL CONSTRAINT "DF_c983d26a490638e57f4f7126c12" DEFAULT getdate(), "displayName" nvarchar(255) NOT NULL, "accountType" int NOT NULL, CONSTRAINT "PK_294ac805dc16e7f2e6ec1248e3d" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "firm-client-team-members" ("guid" uniqueidentifier NOT NULL CONSTRAINT "DF_362d4236811cfe2736d361a8c14" DEFAULT NEWSEQUENTIALID(), "createdOn" datetime2 NOT NULL CONSTRAINT "DF_3f67f48938a2726e6a617e4fc23" DEFAULT getdate(), "modifiedOn" datetime2 NOT NULL CONSTRAINT "DF_bd4abba18fa04e5fb29900eb1e9" DEFAULT getdate(), "clientGuid" uniqueidentifier, "memberGuid" uniqueidentifier, CONSTRAINT "PK_362d4236811cfe2736d361a8c14" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "notifications" ("guid" uniqueidentifier NOT NULL CONSTRAINT "DF_fb4a7d3e7a0d89d2a6e0eb664d7" DEFAULT NEWSEQUENTIALID(), "createdOn" datetime2 NOT NULL CONSTRAINT "DF_fb00b3fc321cf26e5c575ac720b" DEFAULT getdate(), "modifiedOn" datetime2 NOT NULL CONSTRAINT "DF_8f5ced025d1598ba0d9a9d5f6a2" DEFAULT getdate(), "message" varchar(255) NOT NULL, "dismissed" bit NOT NULL, "notification_type" varchar(255) NOT NULL, CONSTRAINT "PK_fb4a7d3e7a0d89d2a6e0eb664d7" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "role-permissions" ("rolesGuid" uniqueidentifier NOT NULL, "systemPermissionsGuid" uniqueidentifier NOT NULL, CONSTRAINT "PK_c705e49d288a83a336ad66bf1d5" PRIMARY KEY ("rolesGuid", "systemPermissionsGuid"))`);
        await queryRunner.query(`CREATE TABLE "firm-staff-roles" ("firmStaffGuid" uniqueidentifier NOT NULL, "rolesGuid" uniqueidentifier NOT NULL, CONSTRAINT "PK_322c1d0480ab06d25c8f753ac52" PRIMARY KEY ("firmStaffGuid", "rolesGuid"))`);
        await queryRunner.query(`CREATE TABLE "firm-client-team-roles" ("firmClientTeamMembersGuid" uniqueidentifier NOT NULL, "rolesGuid" uniqueidentifier NOT NULL, CONSTRAINT "PK_78a0aaf9b8f882483668af762e7" PRIMARY KEY ("firmClientTeamMembersGuid", "rolesGuid"))`);
        await queryRunner.query(`ALTER TABLE "profile-attributes" ADD CONSTRAINT "FK_5c7e459b2d2e490326641bc2ec8" FOREIGN KEY ("profileGuid") REFERENCES "profiles"("guid")`);
        await queryRunner.query(`ALTER TABLE "profile-contact-information" ADD CONSTRAINT "FK_65170971405a6547f0813218320" FOREIGN KEY ("profileGuid") REFERENCES "profiles"("guid")`);
        await queryRunner.query(`ALTER TABLE "system-users" ADD CONSTRAINT "FK_26ef62bab7edede12c4898a3eee" FOREIGN KEY ("profileGuid") REFERENCES "profiles"("guid")`);
        await queryRunner.query(`ALTER TABLE "client-members" ADD CONSTRAINT "FK_18a9c22d003fe46ddd0859799b7" FOREIGN KEY ("clientAccountGuid") REFERENCES "client-accounts"("guid")`);
        await queryRunner.query(`ALTER TABLE "client-members" ADD CONSTRAINT "FK_e87e47fdc6a550f14a8a335e89a" FOREIGN KEY ("userGuid") REFERENCES "system-users"("guid")`);
        await queryRunner.query(`ALTER TABLE "client-relationships" ADD CONSTRAINT "FK_033724484868088beb894cd63a3" FOREIGN KEY ("clientAccountGuid") REFERENCES "client-accounts"("guid")`);
        await queryRunner.query(`ALTER TABLE "client-relationships" ADD CONSTRAINT "FK_88c14ed59abca9006dfa30f4e28" FOREIGN KEY ("profileGuid") REFERENCES "profiles"("guid")`);
        await queryRunner.query(`ALTER TABLE "client-affiliations" ADD CONSTRAINT "FK_dc72aab5fedf409288679800b77" FOREIGN KEY ("clientAccountGuid") REFERENCES "client-accounts"("guid")`);
        await queryRunner.query(`ALTER TABLE "client-accounts" ADD CONSTRAINT "FK_6d90f94acee6c0db3c8135a7817" FOREIGN KEY ("ownerGuid") REFERENCES "system-users"("guid")`);
        await queryRunner.query(`ALTER TABLE "firm-staff-certifications" ADD CONSTRAINT "FK_8e1bdbfd91154a7466e9599873a" FOREIGN KEY ("memberGuid") REFERENCES "firm-staff"("guid")`);
        await queryRunner.query(`ALTER TABLE "firm-staff" ADD CONSTRAINT "FK_2813cba989911c11dec1b6456c1" FOREIGN KEY ("firmGuid") REFERENCES "firms"("guid")`);
        await queryRunner.query(`ALTER TABLE "firm-staff" ADD CONSTRAINT "FK_fbea7378a22c50fc2037d6b5adc" FOREIGN KEY ("userGuid") REFERENCES "system-users"("guid")`);
        await queryRunner.query(`ALTER TABLE "firm-clients" ADD CONSTRAINT "FK_ab8c97c38541236fd67fac5e91e" FOREIGN KEY ("firmGuid") REFERENCES "firms"("guid")`);
        await queryRunner.query(`ALTER TABLE "firm-clients" ADD CONSTRAINT "FK_28ab321590f85dc7b995267b253" FOREIGN KEY ("clientGuid") REFERENCES "client-accounts"("guid")`);
        await queryRunner.query(`ALTER TABLE "firm-certifications" ADD CONSTRAINT "FK_465fd28efaf35c28d98eedcf632" FOREIGN KEY ("firmGuid") REFERENCES "firms"("guid")`);
        await queryRunner.query(`ALTER TABLE "firms" ADD CONSTRAINT "FK_0d2c72c84aaa001f4d58747fb7a" FOREIGN KEY ("accountGuid") REFERENCES "firm-accounts"("guid")`);
        await queryRunner.query(`ALTER TABLE "firm-client-team-members" ADD CONSTRAINT "FK_71553fe0bfdad6c89d2def99df3" FOREIGN KEY ("clientGuid") REFERENCES "firm-clients"("guid")`);
        await queryRunner.query(`ALTER TABLE "firm-client-team-members" ADD CONSTRAINT "FK_e7d42e934d43ed4aa29765751ac" FOREIGN KEY ("memberGuid") REFERENCES "firm-staff"("guid")`);
        await queryRunner.query(`ALTER TABLE "role-permissions" ADD CONSTRAINT "FK_ebbab46a2db2cb07c08c7e65abd" FOREIGN KEY ("rolesGuid") REFERENCES "roles"("guid") ON DELETE CASCADE`);
        await queryRunner.query(`ALTER TABLE "role-permissions" ADD CONSTRAINT "FK_ed669180304fa6913d8e835073a" FOREIGN KEY ("systemPermissionsGuid") REFERENCES "system-permissions"("guid") ON DELETE CASCADE`);
        await queryRunner.query(`ALTER TABLE "firm-staff-roles" ADD CONSTRAINT "FK_e6bc9bcca0a54d20a4501ea22c5" FOREIGN KEY ("firmStaffGuid") REFERENCES "firm-staff"("guid") ON DELETE CASCADE`);
        await queryRunner.query(`ALTER TABLE "firm-staff-roles" ADD CONSTRAINT "FK_6aa7d380b0133b780621bf1f279" FOREIGN KEY ("rolesGuid") REFERENCES "roles"("guid") ON DELETE CASCADE`);
        await queryRunner.query(`ALTER TABLE "firm-client-team-roles" ADD CONSTRAINT "FK_a100a9604c60449995621e9a512" FOREIGN KEY ("firmClientTeamMembersGuid") REFERENCES "firm-client-team-members"("guid") ON DELETE CASCADE`);
        await queryRunner.query(`ALTER TABLE "firm-client-team-roles" ADD CONSTRAINT "FK_cc2c94474396fc6e970ebe98626" FOREIGN KEY ("rolesGuid") REFERENCES "roles"("guid") ON DELETE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "firm-client-team-roles" DROP CONSTRAINT "FK_cc2c94474396fc6e970ebe98626"`);
        await queryRunner.query(`ALTER TABLE "firm-client-team-roles" DROP CONSTRAINT "FK_a100a9604c60449995621e9a512"`);
        await queryRunner.query(`ALTER TABLE "firm-staff-roles" DROP CONSTRAINT "FK_6aa7d380b0133b780621bf1f279"`);
        await queryRunner.query(`ALTER TABLE "firm-staff-roles" DROP CONSTRAINT "FK_e6bc9bcca0a54d20a4501ea22c5"`);
        await queryRunner.query(`ALTER TABLE "role-permissions" DROP CONSTRAINT "FK_ed669180304fa6913d8e835073a"`);
        await queryRunner.query(`ALTER TABLE "role-permissions" DROP CONSTRAINT "FK_ebbab46a2db2cb07c08c7e65abd"`);
        await queryRunner.query(`ALTER TABLE "firm-client-team-members" DROP CONSTRAINT "FK_e7d42e934d43ed4aa29765751ac"`);
        await queryRunner.query(`ALTER TABLE "firm-client-team-members" DROP CONSTRAINT "FK_71553fe0bfdad6c89d2def99df3"`);
        await queryRunner.query(`ALTER TABLE "firms" DROP CONSTRAINT "FK_0d2c72c84aaa001f4d58747fb7a"`);
        await queryRunner.query(`ALTER TABLE "firm-certifications" DROP CONSTRAINT "FK_465fd28efaf35c28d98eedcf632"`);
        await queryRunner.query(`ALTER TABLE "firm-clients" DROP CONSTRAINT "FK_28ab321590f85dc7b995267b253"`);
        await queryRunner.query(`ALTER TABLE "firm-clients" DROP CONSTRAINT "FK_ab8c97c38541236fd67fac5e91e"`);
        await queryRunner.query(`ALTER TABLE "firm-staff" DROP CONSTRAINT "FK_fbea7378a22c50fc2037d6b5adc"`);
        await queryRunner.query(`ALTER TABLE "firm-staff" DROP CONSTRAINT "FK_2813cba989911c11dec1b6456c1"`);
        await queryRunner.query(`ALTER TABLE "firm-staff-certifications" DROP CONSTRAINT "FK_8e1bdbfd91154a7466e9599873a"`);
        await queryRunner.query(`ALTER TABLE "client-accounts" DROP CONSTRAINT "FK_6d90f94acee6c0db3c8135a7817"`);
        await queryRunner.query(`ALTER TABLE "client-affiliations" DROP CONSTRAINT "FK_dc72aab5fedf409288679800b77"`);
        await queryRunner.query(`ALTER TABLE "client-relationships" DROP CONSTRAINT "FK_88c14ed59abca9006dfa30f4e28"`);
        await queryRunner.query(`ALTER TABLE "client-relationships" DROP CONSTRAINT "FK_033724484868088beb894cd63a3"`);
        await queryRunner.query(`ALTER TABLE "client-members" DROP CONSTRAINT "FK_e87e47fdc6a550f14a8a335e89a"`);
        await queryRunner.query(`ALTER TABLE "client-members" DROP CONSTRAINT "FK_18a9c22d003fe46ddd0859799b7"`);
        await queryRunner.query(`ALTER TABLE "system-users" DROP CONSTRAINT "FK_26ef62bab7edede12c4898a3eee"`);
        await queryRunner.query(`ALTER TABLE "profile-contact-information" DROP CONSTRAINT "FK_65170971405a6547f0813218320"`);
        await queryRunner.query(`ALTER TABLE "profile-attributes" DROP CONSTRAINT "FK_5c7e459b2d2e490326641bc2ec8"`);
        await queryRunner.query(`DROP TABLE "firm-client-team-roles"`);
        await queryRunner.query(`DROP TABLE "firm-staff-roles"`);
        await queryRunner.query(`DROP TABLE "role-permissions"`);
        await queryRunner.query(`DROP TABLE "notifications"`);
        await queryRunner.query(`DROP TABLE "firm-client-team-members"`);
        await queryRunner.query(`DROP TABLE "firm-accounts"`);
        await queryRunner.query(`DROP TABLE "firms"`);
        await queryRunner.query(`DROP INDEX "REL_465fd28efaf35c28d98eedcf63" ON "firm-certifications"`);
        await queryRunner.query(`DROP TABLE "firm-certifications"`);
        await queryRunner.query(`DROP TABLE "firm-clients"`);
        await queryRunner.query(`DROP INDEX "REL_fbea7378a22c50fc2037d6b5ad" ON "firm-staff"`);
        await queryRunner.query(`DROP TABLE "firm-staff"`);
        await queryRunner.query(`DROP INDEX "REL_8e1bdbfd91154a7466e9599873" ON "firm-staff-certifications"`);
        await queryRunner.query(`DROP TABLE "firm-staff-certifications"`);
        await queryRunner.query(`DROP INDEX "REL_6d90f94acee6c0db3c8135a781" ON "client-accounts"`);
        await queryRunner.query(`DROP TABLE "client-accounts"`);
        await queryRunner.query(`DROP TABLE "client-affiliations"`);
        await queryRunner.query(`DROP INDEX "REL_88c14ed59abca9006dfa30f4e2" ON "client-relationships"`);
        await queryRunner.query(`DROP TABLE "client-relationships"`);
        await queryRunner.query(`DROP INDEX "REL_e87e47fdc6a550f14a8a335e89" ON "client-members"`);
        await queryRunner.query(`DROP TABLE "client-members"`);
        await queryRunner.query(`DROP INDEX "REL_26ef62bab7edede12c4898a3ee" ON "system-users"`);
        await queryRunner.query(`DROP TABLE "system-users"`);
        await queryRunner.query(`DROP TABLE "profiles"`);
        await queryRunner.query(`DROP TABLE "profile-contact-information"`);
        await queryRunner.query(`DROP TABLE "profile-attributes"`);
        await queryRunner.query(`DROP TABLE "roles"`);
        await queryRunner.query(`DROP INDEX "IDX_797abf10a90a3306603fbf46bc" ON "system-permissions"`);
        await queryRunner.query(`DROP TABLE "system-permissions"`);
        await queryRunner.query(`DROP TABLE "activity-logs"`);
    }

}