import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterTablePlate1633894716046 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("plate", new TableColumn({
            name: "price",
            type: "integer"
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("plate", "price");
    }

}
