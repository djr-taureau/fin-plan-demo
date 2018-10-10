import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration1539115740368 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP INDEX "IDX_797abf10a90a3306603fbf46bc" ON "system-permissions"`);
        await queryRunner.query(`DROP INDEX "REL_26ef62bab7edede12c4898a3ee" ON "system-users"`);
        await queryRunner.query(`DROP INDEX "REL_e87e47fdc6a550f14a8a335e89" ON "client-members"`);
        await queryRunner.query(`DROP INDEX "REL_88c14ed59abca9006dfa30f4e2" ON "client-relationships"`);
        await queryRunner.query(`DROP INDEX "REL_6d90f94acee6c0db3c8135a781" ON "client-accounts"`);
        await queryRunner.query(`DROP INDEX "REL_8e1bdbfd91154a7466e9599873" ON "firm-staff-certifications"`);
        await queryRunner.query(`DROP INDEX "REL_fbea7378a22c50fc2037d6b5ad" ON "firm-staff"`);
        await queryRunner.query(`DROP INDEX "REL_465fd28efaf35c28d98eedcf63" ON "firm-certifications"`);
        await queryRunner.query(`CREATE INDEX "IDX_797abf10a90a3306603fbf46bc" ON "system-permissions"("scope") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_26ef62bab7edede12c4898a3ee" ON "system-users"("profileGuid") WHERE "profileGuid" IS NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_e87e47fdc6a550f14a8a335e89" ON "client-members"("userGuid") WHERE "userGuid" IS NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_88c14ed59abca9006dfa30f4e2" ON "client-relationships"("profileGuid") WHERE "profileGuid" IS NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_6d90f94acee6c0db3c8135a781" ON "client-accounts"("ownerGuid") WHERE "ownerGuid" IS NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_8e1bdbfd91154a7466e9599873" ON "firm-staff-certifications"("memberGuid") WHERE "memberGuid" IS NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_fbea7378a22c50fc2037d6b5ad" ON "firm-staff"("userGuid") WHERE "userGuid" IS NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_465fd28efaf35c28d98eedcf63" ON "firm-certifications"("firmGuid") WHERE "firmGuid" IS NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP INDEX "REL_465fd28efaf35c28d98eedcf63" ON "firm-certifications"`);
        await queryRunner.query(`DROP INDEX "REL_fbea7378a22c50fc2037d6b5ad" ON "firm-staff"`);
        await queryRunner.query(`DROP INDEX "REL_8e1bdbfd91154a7466e9599873" ON "firm-staff-certifications"`);
        await queryRunner.query(`DROP INDEX "REL_6d90f94acee6c0db3c8135a781" ON "client-accounts"`);
        await queryRunner.query(`DROP INDEX "REL_88c14ed59abca9006dfa30f4e2" ON "client-relationships"`);
        await queryRunner.query(`DROP INDEX "REL_e87e47fdc6a550f14a8a335e89" ON "client-members"`);
        await queryRunner.query(`DROP INDEX "REL_26ef62bab7edede12c4898a3ee" ON "system-users"`);
        await queryRunner.query(`DROP INDEX "IDX_797abf10a90a3306603fbf46bc" ON "system-permissions"`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_465fd28efaf35c28d98eedcf63" ON "firm-certifications"("firmGuid") WHERE ([firmGuid] IS NOT NULL)`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_fbea7378a22c50fc2037d6b5ad" ON "firm-staff"("userGuid") WHERE ([userGuid] IS NOT NULL)`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_8e1bdbfd91154a7466e9599873" ON "firm-staff-certifications"("memberGuid") WHERE ([memberGuid] IS NOT NULL)`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_6d90f94acee6c0db3c8135a781" ON "client-accounts"("ownerGuid") WHERE ([ownerGuid] IS NOT NULL)`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_88c14ed59abca9006dfa30f4e2" ON "client-relationships"("profileGuid") WHERE ([profileGuid] IS NOT NULL)`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_e87e47fdc6a550f14a8a335e89" ON "client-members"("userGuid") WHERE ([userGuid] IS NOT NULL)`);
        await queryRunner.query(`CREATE UNIQUE INDEX "REL_26ef62bab7edede12c4898a3ee" ON "system-users"("profileGuid") WHERE ([profileGuid] IS NOT NULL)`);
        await queryRunner.query(`CREATE INDEX "IDX_797abf10a90a3306603fbf46bc" ON "system-permissions"("scope") `);
    }

}
