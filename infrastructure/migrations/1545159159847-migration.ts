import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1545159159847 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP INDEX "IDX_797abf10a90a3306603fbf46bc" ON "system-permissions"`);
        await queryRunner.query(`DROP INDEX "REL_26ef62bab7edede12c4898a3ee" ON "system-users"`);
        await queryRunner.query(`DROP INDEX "REL_e87e47fdc6a550f14a8a335e89" ON "client-members"`);
        await queryRunner.query(`DROP INDEX "REL_88c14ed59abca9006dfa30f4e2" ON "client-relationships"`);
        await queryRunner.query(`DROP INDEX "REL_6d90f94acee6c0db3c8135a781" ON "client-accounts"`);
        await queryRunner.query(`DROP INDEX "IDX_b0271c683aaf001617dec7f4c5" ON "taxation-category"`);
        await queryRunner.query(`DROP INDEX "IDX_6b01f216c42222d6fb1b350c3b" ON "income-classifications"`);
        await queryRunner.query(`DROP INDEX "REL_8e1bdbfd91154a7466e9599873" ON "firm-staff-certifications"`);
        await queryRunner.query(`DROP INDEX "REL_fbea7378a22c50fc2037d6b5ad" ON "firm-staff"`);
        await queryRunner.query(`DROP INDEX "REL_465fd28efaf35c28d98eedcf63" ON "firm-certifications"`);
        await queryRunner.query(`DROP INDEX "REL_170f75299331bb7e214b45d511" ON "firm-accounts"`);
        await queryRunner.query(`DROP INDEX "IDX_6d1e3eb537d4a4b39bca94d1e6" ON "system-tool-results"`);
        await queryRunner.query(`DROP INDEX "IDX_f6ab7583c771a89d07760923b9" ON "relationships"`);
        await queryRunner.query(`DROP INDEX "IDX_83b3e6a352d16970f0b50fae9f" ON "relationships"`);
        await queryRunner.query(`DROP INDEX "IDX_506d46e308160d54a4d708ee51" ON "relationship-attributes"`);
        await queryRunner.query(`DROP INDEX "IDX_c20243a99b2cab4e721b1435e7" ON "settings"`);
        await queryRunner.query(`DROP INDEX "IDX_ca7857276d2a30f4dcfa0e42cd" ON "settings"`);
        await queryRunner.query(`DROP INDEX "IDX_a724de3585869bca2d8ee03297" ON "address"`);
        await queryRunner.query(`DROP INDEX "IDX_6d0a6567e7447c5a05bcacacc2" ON "contact-information"`);
        await queryRunner.query(`CREATE TABLE "notes" ("guid" uniqueidentifier NOT NULL CONSTRAINT "DF_7dad4f85b6a1d0b4fc01d6208f5" DEFAULT NEWSEQUENTIALID(), "createdOn" datetime2 NOT NULL CONSTRAINT "DF_61f35f31fe605d61c584cfc9572" DEFAULT getdate(), "modifiedOn" datetime2 NOT NULL CONSTRAINT "DF_90675c1f35644970ee6757ec99d" DEFAULT getdate(), "name" nvarchar(255) NOT NULL, "note" nvarchar(255), "relatedEntityGuid" uniqueidentifier NOT NULL, "entityContext" int NOT NULL, "owner" uniqueidentifier NOT NULL, "createBy" nvarchar(255) NOT NULL, "modifiedBy" uniqueidentifier NOT NULL, CONSTRAINT "PK_7dad4f85b6a1d0b4fc01d6208f5" PRIMARY KEY ("guid"))`);
        await queryRunner.query(`CREATE INDEX "IDX_797abf10a90a3306603fbf46bc" ON "system-permissions"("scope") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_26ef62bab7edede12c4898a3ee" ON "system-users"("profileGuid") WHERE "profileGuid" IS NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_e87e47fdc6a550f14a8a335e89" ON "client-members"("userGuid") WHERE "userGuid" IS NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_88c14ed59abca9006dfa30f4e2" ON "client-relationships"("profileGuid") WHERE "profileGuid" IS NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_6d90f94acee6c0db3c8135a781" ON "client-accounts"("ownerGuid") WHERE "ownerGuid" IS NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_b0271c683aaf001617dec7f4c5" ON "taxation-category"("country") `);
        await queryRunner.query(`CREATE INDEX "IDX_6b01f216c42222d6fb1b350c3b" ON "income-classifications"("country") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_8e1bdbfd91154a7466e9599873" ON "firm-staff-certifications"("memberGuid") WHERE "memberGuid" IS NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_fbea7378a22c50fc2037d6b5ad" ON "firm-staff"("userGuid") WHERE "userGuid" IS NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_465fd28efaf35c28d98eedcf63" ON "firm-certifications"("firmGuid") WHERE "firmGuid" IS NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_170f75299331bb7e214b45d511" ON "firm-accounts"("ownerGuid") WHERE "ownerGuid" IS NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_6d1e3eb537d4a4b39bca94d1e6" ON "system-tool-results"("toolGuid", "initiatorGuid", "contextGuid") `);
        await queryRunner.query(`CREATE INDEX "IDX_f6ab7583c771a89d07760923b9" ON "relationships"("source") `);
        await queryRunner.query(`CREATE INDEX "IDX_83b3e6a352d16970f0b50fae9f" ON "relationships"("target") `);
        await queryRunner.query(`CREATE INDEX "IDX_506d46e308160d54a4d708ee51" ON "relationship-attributes"("relationshipGuid") `);
        await queryRunner.query(`CREATE INDEX "IDX_c20243a99b2cab4e721b1435e7" ON "settings"("entityGuid") `);
        await queryRunner.query(`CREATE INDEX "IDX_ca7857276d2a30f4dcfa0e42cd" ON "settings"("name") `);
        await queryRunner.query(`CREATE INDEX "IDX_a724de3585869bca2d8ee03297" ON "address"("target") `);
        await queryRunner.query(`CREATE INDEX "IDX_6d0a6567e7447c5a05bcacacc2" ON "contact-information"("target") `);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP INDEX "IDX_6d0a6567e7447c5a05bcacacc2" ON "contact-information"`);
        await queryRunner.query(`DROP INDEX "IDX_a724de3585869bca2d8ee03297" ON "address"`);
        await queryRunner.query(`DROP INDEX "IDX_ca7857276d2a30f4dcfa0e42cd" ON "settings"`);
        await queryRunner.query(`DROP INDEX "IDX_c20243a99b2cab4e721b1435e7" ON "settings"`);
        await queryRunner.query(`DROP INDEX "IDX_506d46e308160d54a4d708ee51" ON "relationship-attributes"`);
        await queryRunner.query(`DROP INDEX "IDX_83b3e6a352d16970f0b50fae9f" ON "relationships"`);
        await queryRunner.query(`DROP INDEX "IDX_f6ab7583c771a89d07760923b9" ON "relationships"`);
        await queryRunner.query(`DROP INDEX "IDX_6d1e3eb537d4a4b39bca94d1e6" ON "system-tool-results"`);
        await queryRunner.query(`DROP INDEX "REL_170f75299331bb7e214b45d511" ON "firm-accounts"`);
        await queryRunner.query(`DROP INDEX "REL_465fd28efaf35c28d98eedcf63" ON "firm-certifications"`);
        await queryRunner.query(`DROP INDEX "REL_fbea7378a22c50fc2037d6b5ad" ON "firm-staff"`);
        await queryRunner.query(`DROP INDEX "REL_8e1bdbfd91154a7466e9599873" ON "firm-staff-certifications"`);
        await queryRunner.query(`DROP INDEX "IDX_6b01f216c42222d6fb1b350c3b" ON "income-classifications"`);
        await queryRunner.query(`DROP INDEX "IDX_b0271c683aaf001617dec7f4c5" ON "taxation-category"`);
        await queryRunner.query(`DROP INDEX "REL_6d90f94acee6c0db3c8135a781" ON "client-accounts"`);
        await queryRunner.query(`DROP INDEX "REL_88c14ed59abca9006dfa30f4e2" ON "client-relationships"`);
        await queryRunner.query(`DROP INDEX "REL_e87e47fdc6a550f14a8a335e89" ON "client-members"`);
        await queryRunner.query(`DROP INDEX "REL_26ef62bab7edede12c4898a3ee" ON "system-users"`);
        await queryRunner.query(`DROP INDEX "IDX_797abf10a90a3306603fbf46bc" ON "system-permissions"`);
        await queryRunner.query(`DROP TABLE "notes"`);
        await queryRunner.query(`CREATE INDEX "IDX_6d0a6567e7447c5a05bcacacc2" ON "contact-information"("target") `);
        await queryRunner.query(`CREATE INDEX "IDX_a724de3585869bca2d8ee03297" ON "address"("target") `);
        await queryRunner.query(`CREATE INDEX "IDX_ca7857276d2a30f4dcfa0e42cd" ON "settings"("name") `);
        await queryRunner.query(`CREATE INDEX "IDX_c20243a99b2cab4e721b1435e7" ON "settings"("entityGuid") `);
        await queryRunner.query(`CREATE INDEX "IDX_506d46e308160d54a4d708ee51" ON "relationship-attributes"("relationshipGuid") `);
        await queryRunner.query(`CREATE INDEX "IDX_83b3e6a352d16970f0b50fae9f" ON "relationships"("target") `);
        await queryRunner.query(`CREATE INDEX "IDX_f6ab7583c771a89d07760923b9" ON "relationships"("source") `);
        await queryRunner.query(`CREATE INDEX "IDX_6d1e3eb537d4a4b39bca94d1e6" ON "system-tool-results"("toolGuid", "initiatorGuid", "contextGuid") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_170f75299331bb7e214b45d511" ON "firm-accounts"("ownerGuid") WHERE ([ownerGuid] IS NOT NULL)`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_465fd28efaf35c28d98eedcf63" ON "firm-certifications"("firmGuid") WHERE ([firmGuid] IS NOT NULL)`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_fbea7378a22c50fc2037d6b5ad" ON "firm-staff"("userGuid") WHERE ([userGuid] IS NOT NULL)`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_8e1bdbfd91154a7466e9599873" ON "firm-staff-certifications"("memberGuid") WHERE ([memberGuid] IS NOT NULL)`);
        await queryRunner.query(`CREATE INDEX "IDX_6b01f216c42222d6fb1b350c3b" ON "income-classifications"("country") `);
        await queryRunner.query(`CREATE INDEX "IDX_b0271c683aaf001617dec7f4c5" ON "taxation-category"("country") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_6d90f94acee6c0db3c8135a781" ON "client-accounts"("ownerGuid") WHERE ([ownerGuid] IS NOT NULL)`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_88c14ed59abca9006dfa30f4e2" ON "client-relationships"("profileGuid") WHERE ([profileGuid] IS NOT NULL)`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_e87e47fdc6a550f14a8a335e89" ON "client-members"("userGuid") WHERE ([userGuid] IS NOT NULL)`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_26ef62bab7edede12c4898a3ee" ON "system-users"("profileGuid") WHERE ([profileGuid] IS NOT NULL)`);
        await queryRunner.query(`CREATE INDEX "IDX_797abf10a90a3306603fbf46bc" ON "system-permissions"("scope") `);
    }

}
