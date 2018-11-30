import {MigrationInterface, QueryRunner} from "typeorm";

export class renamedFirmAccounts1542738643418 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "firms" DROP CONSTRAINT "FK_0d2c72c84aaa001f4d58747fb7a"`);
        await queryRunner.query(`DROP INDEX "IDX_797abf10a90a3306603fbf46bc" ON "system-permissions"`);
        await queryRunner.query(`DROP INDEX "REL_26ef62bab7edede12c4898a3ee" ON "system-users"`);
        await queryRunner.query(`DROP INDEX "REL_e87e47fdc6a550f14a8a335e89" ON "client-members"`);
        await queryRunner.query(`DROP INDEX "REL_88c14ed59abca9006dfa30f4e2" ON "client-relationships"`);
        await queryRunner.query(`DROP INDEX "REL_6d90f94acee6c0db3c8135a781" ON "client-accounts"`);
        await queryRunner.query(`DROP INDEX "REL_8e1bdbfd91154a7466e9599873" ON "firm-staff-certifications"`);
        await queryRunner.query(`DROP INDEX "REL_fbea7378a22c50fc2037d6b5ad" ON "firm-staff"`);
        await queryRunner.query(`DROP INDEX "REL_465fd28efaf35c28d98eedcf63" ON "firm-certifications"`);
        await queryRunner.query(`DROP INDEX "IDX_b0271c683aaf001617dec7f4c5" ON "taxation-category"`);
        await queryRunner.query(`DROP INDEX "IDX_6b01f216c42222d6fb1b350c3b" ON "income-classifications"`);
        await queryRunner.query(`DROP INDEX "IDX_6d1e3eb537d4a4b39bca94d1e6" ON "system-tool-results"`);
        await queryRunner.query(`DROP INDEX "IDX_f6ab7583c771a89d07760923b9" ON "relationships"`);
        await queryRunner.query(`DROP INDEX "IDX_83b3e6a352d16970f0b50fae9f" ON "relationships"`);
        await queryRunner.query(`DROP INDEX "IDX_506d46e308160d54a4d708ee51" ON "relationship-attributes"`);
        await queryRunner.query(`DROP INDEX "IDX_c20243a99b2cab4e721b1435e7" ON "settings"`);
        await queryRunner.query(`DROP INDEX "IDX_ca7857276d2a30f4dcfa0e42cd" ON "settings"`);
        await queryRunner.query(`DROP INDEX "IDX_a724de3585869bca2d8ee03297" ON "address"`);
        await queryRunner.query(`DROP INDEX "IDX_6d0a6567e7447c5a05bcacacc2" ON "contact-information"`);
        await queryRunner.query(`EXEC sp_rename "firms.accountGuid", "billingAccountGuid"`);
        await queryRunner.query(`CREATE TABLE "team-members" ("guid" uniqueidentifier NOT NULL CONSTRAINT "DF_294530ef35bbe8eda39e2e2a13a" DEFAULT NEWSEQUENTIALID(), "createdOn" datetime2 NOT NULL CONSTRAINT "DF_26dccae3dd0e2867e25a7772398" DEFAULT getdate(), "modifiedOn" datetime2 NOT NULL CONSTRAINT "DF_9e66e0ad676aef5e598b491993e" DEFAULT getdate(), "entityGuid" nvarchar(255) NOT NULL, "membershipType" int NOT NULL, "memberGuid" uniqueidentifier, CONSTRAINT "PK_294530ef35bbe8eda39e2e2a13a" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE TABLE "billing-accounts" ("guid" uniqueidentifier NOT NULL CONSTRAINT "DF_1195cf9e32c4427eb2b4b7a95b4" DEFAULT NEWSEQUENTIALID(), "createdOn" datetime2 NOT NULL CONSTRAINT "DF_5878668c39ef555127c6d90156f" DEFAULT getdate(), "modifiedOn" datetime2 NOT NULL CONSTRAINT "DF_6d82835655eb6999e238006a77f" DEFAULT getdate(), "displayName" nvarchar(255) NOT NULL, "subscription" int NOT NULL, "ownerGuid" uniqueidentifier, CONSTRAINT "PK_1195cf9e32c4427eb2b4b7a95b4" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_134caa856aff2a2c8afd5c6251" ON "billing-accounts"("ownerGuid") WHERE "ownerGuid" IS NOT NULL`);
        await queryRunner.query(`CREATE TABLE "team-member-roles" ("teamMembersGuid" uniqueidentifier NOT NULL, "rolesGuid" uniqueidentifier NOT NULL, CONSTRAINT "PK_06f64064540b55ba0cc3484560a" PRIMARY KEY ("teamMembersGuid", "rolesGuid"))`);
        await queryRunner.query(`CREATE INDEX "IDX_797abf10a90a3306603fbf46bc" ON "system-permissions"("scope") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_26ef62bab7edede12c4898a3ee" ON "system-users"("profileGuid") WHERE "profileGuid" IS NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_e87e47fdc6a550f14a8a335e89" ON "client-members"("userGuid") WHERE "userGuid" IS NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_88c14ed59abca9006dfa30f4e2" ON "client-relationships"("profileGuid") WHERE "profileGuid" IS NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_6d90f94acee6c0db3c8135a781" ON "client-accounts"("ownerGuid") WHERE "ownerGuid" IS NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_8e1bdbfd91154a7466e9599873" ON "firm-staff-certifications"("memberGuid") WHERE "memberGuid" IS NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_fbea7378a22c50fc2037d6b5ad" ON "firm-staff"("userGuid") WHERE "userGuid" IS NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_465fd28efaf35c28d98eedcf63" ON "firm-certifications"("firmGuid") WHERE "firmGuid" IS NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_b0271c683aaf001617dec7f4c5" ON "taxation-category"("country") `);
        await queryRunner.query(`CREATE INDEX "IDX_6b01f216c42222d6fb1b350c3b" ON "income-classifications"("country") `);
        await queryRunner.query(`CREATE INDEX "IDX_6d1e3eb537d4a4b39bca94d1e6" ON "system-tool-results"("toolGuid", "initiatorGuid", "contextGuid") `);
        await queryRunner.query(`CREATE INDEX "IDX_f6ab7583c771a89d07760923b9" ON "relationships"("source") `);
        await queryRunner.query(`CREATE INDEX "IDX_83b3e6a352d16970f0b50fae9f" ON "relationships"("target") `);
        await queryRunner.query(`CREATE INDEX "IDX_506d46e308160d54a4d708ee51" ON "relationship-attributes"("relationshipGuid") `);
        await queryRunner.query(`CREATE INDEX "IDX_c20243a99b2cab4e721b1435e7" ON "settings"("entityGuid") `);
        await queryRunner.query(`CREATE INDEX "IDX_ca7857276d2a30f4dcfa0e42cd" ON "settings"("name") `);
        await queryRunner.query(`CREATE INDEX "IDX_a724de3585869bca2d8ee03297" ON "address"("target") `);
        await queryRunner.query(`CREATE INDEX "IDX_6d0a6567e7447c5a05bcacacc2" ON "contact-information"("target") `);
        await queryRunner.query(`ALTER TABLE "firms" ADD CONSTRAINT "FK_53c3a7b1fd9abbeb9a77f5cbd6f" FOREIGN KEY ("billingAccountGuid") REFERENCES "billing-accounts"("guid")`);
        await queryRunner.query(`ALTER TABLE "team-members" ADD CONSTRAINT "FK_cdc1ca77035e2ffcba0b17ecd8a" FOREIGN KEY ("memberGuid") REFERENCES "firm-staff"("guid")`);
        await queryRunner.query(`ALTER TABLE "billing-accounts" ADD CONSTRAINT "FK_134caa856aff2a2c8afd5c62512" FOREIGN KEY ("ownerGuid") REFERENCES "system-users"("guid")`);
        await queryRunner.query(`ALTER TABLE "team-member-roles" ADD CONSTRAINT "FK_b5f8e9b07a5f1ec06696ee7d3ba" FOREIGN KEY ("teamMembersGuid") REFERENCES "team-members"("guid") ON DELETE CASCADE`);
        await queryRunner.query(`ALTER TABLE "team-member-roles" ADD CONSTRAINT "FK_072dc50be8ee6d2feb5e76e1d54" FOREIGN KEY ("rolesGuid") REFERENCES "roles"("guid") ON DELETE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "team-member-roles" DROP CONSTRAINT "FK_072dc50be8ee6d2feb5e76e1d54"`);
        await queryRunner.query(`ALTER TABLE "team-member-roles" DROP CONSTRAINT "FK_b5f8e9b07a5f1ec06696ee7d3ba"`);
        await queryRunner.query(`ALTER TABLE "billing-accounts" DROP CONSTRAINT "FK_134caa856aff2a2c8afd5c62512"`);
        await queryRunner.query(`ALTER TABLE "team-members" DROP CONSTRAINT "FK_cdc1ca77035e2ffcba0b17ecd8a"`);
        await queryRunner.query(`ALTER TABLE "firms" DROP CONSTRAINT "FK_53c3a7b1fd9abbeb9a77f5cbd6f"`);
        await queryRunner.query(`DROP INDEX "IDX_6d0a6567e7447c5a05bcacacc2" ON "contact-information"`);
        await queryRunner.query(`DROP INDEX "IDX_a724de3585869bca2d8ee03297" ON "address"`);
        await queryRunner.query(`DROP INDEX "IDX_ca7857276d2a30f4dcfa0e42cd" ON "settings"`);
        await queryRunner.query(`DROP INDEX "IDX_c20243a99b2cab4e721b1435e7" ON "settings"`);
        await queryRunner.query(`DROP INDEX "IDX_506d46e308160d54a4d708ee51" ON "relationship-attributes"`);
        await queryRunner.query(`DROP INDEX "IDX_83b3e6a352d16970f0b50fae9f" ON "relationships"`);
        await queryRunner.query(`DROP INDEX "IDX_f6ab7583c771a89d07760923b9" ON "relationships"`);
        await queryRunner.query(`DROP INDEX "IDX_6d1e3eb537d4a4b39bca94d1e6" ON "system-tool-results"`);
        await queryRunner.query(`DROP INDEX "IDX_6b01f216c42222d6fb1b350c3b" ON "income-classifications"`);
        await queryRunner.query(`DROP INDEX "IDX_b0271c683aaf001617dec7f4c5" ON "taxation-category"`);
        await queryRunner.query(`DROP INDEX "REL_465fd28efaf35c28d98eedcf63" ON "firm-certifications"`);
        await queryRunner.query(`DROP INDEX "REL_fbea7378a22c50fc2037d6b5ad" ON "firm-staff"`);
        await queryRunner.query(`DROP INDEX "REL_8e1bdbfd91154a7466e9599873" ON "firm-staff-certifications"`);
        await queryRunner.query(`DROP INDEX "REL_6d90f94acee6c0db3c8135a781" ON "client-accounts"`);
        await queryRunner.query(`DROP INDEX "REL_88c14ed59abca9006dfa30f4e2" ON "client-relationships"`);
        await queryRunner.query(`DROP INDEX "REL_e87e47fdc6a550f14a8a335e89" ON "client-members"`);
        await queryRunner.query(`DROP INDEX "REL_26ef62bab7edede12c4898a3ee" ON "system-users"`);
        await queryRunner.query(`DROP INDEX "IDX_797abf10a90a3306603fbf46bc" ON "system-permissions"`);
        await queryRunner.query(`DROP TABLE "team-member-roles"`);
        await queryRunner.query(`DROP INDEX "REL_134caa856aff2a2c8afd5c6251" ON "billing-accounts"`);
        await queryRunner.query(`DROP TABLE "billing-accounts"`);
        await queryRunner.query(`DROP TABLE "team-members"`);
        await queryRunner.query(`EXEC sp_rename "firms.billingAccountGuid", "accountGuid"`);
        await queryRunner.query(`CREATE INDEX "IDX_6d0a6567e7447c5a05bcacacc2" ON "contact-information"("target") `);
        await queryRunner.query(`CREATE INDEX "IDX_a724de3585869bca2d8ee03297" ON "address"("target") `);
        await queryRunner.query(`CREATE INDEX "IDX_ca7857276d2a30f4dcfa0e42cd" ON "settings"("name") `);
        await queryRunner.query(`CREATE INDEX "IDX_c20243a99b2cab4e721b1435e7" ON "settings"("entityGuid") `);
        await queryRunner.query(`CREATE INDEX "IDX_506d46e308160d54a4d708ee51" ON "relationship-attributes"("relationshipGuid") `);
        await queryRunner.query(`CREATE INDEX "IDX_83b3e6a352d16970f0b50fae9f" ON "relationships"("target") `);
        await queryRunner.query(`CREATE INDEX "IDX_f6ab7583c771a89d07760923b9" ON "relationships"("source") `);
        await queryRunner.query(`CREATE INDEX "IDX_6d1e3eb537d4a4b39bca94d1e6" ON "system-tool-results"("toolGuid", "initiatorGuid", "contextGuid") `);
        await queryRunner.query(`CREATE INDEX "IDX_6b01f216c42222d6fb1b350c3b" ON "income-classifications"("country") `);
        await queryRunner.query(`CREATE INDEX "IDX_b0271c683aaf001617dec7f4c5" ON "taxation-category"("country") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_465fd28efaf35c28d98eedcf63" ON "firm-certifications"("firmGuid") WHERE ([firmGuid] IS NOT NULL)`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_fbea7378a22c50fc2037d6b5ad" ON "firm-staff"("userGuid") WHERE ([userGuid] IS NOT NULL)`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_8e1bdbfd91154a7466e9599873" ON "firm-staff-certifications"("memberGuid") WHERE ([memberGuid] IS NOT NULL)`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_6d90f94acee6c0db3c8135a781" ON "client-accounts"("ownerGuid") WHERE ([ownerGuid] IS NOT NULL)`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_88c14ed59abca9006dfa30f4e2" ON "client-relationships"("profileGuid") WHERE ([profileGuid] IS NOT NULL)`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_e87e47fdc6a550f14a8a335e89" ON "client-members"("userGuid") WHERE ([userGuid] IS NOT NULL)`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_26ef62bab7edede12c4898a3ee" ON "system-users"("profileGuid") WHERE ([profileGuid] IS NOT NULL)`);
        await queryRunner.query(`CREATE INDEX "IDX_797abf10a90a3306603fbf46bc" ON "system-permissions"("scope") `);
        await queryRunner.query(`ALTER TABLE "firms" ADD CONSTRAINT "FK_0d2c72c84aaa001f4d58747fb7a" FOREIGN KEY ("accountGuid") REFERENCES "firm-accounts"("guid") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
