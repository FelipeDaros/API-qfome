import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateTablePlate1633798049679 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "plate",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "description",
                    type: "varchar"
                },
                {
                    name: "photo_plate",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "status",
                    type: "boolean",
                    default: true
                },
                {
                    name: "restaurant_id",
                    type: "uuid"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                }
            ]
        }))

        await queryRunner.createForeignKey("plate", new TableForeignKey({
            columnNames: ["restaurant_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "restaurant",
            onDelete: "RESTRICT"
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("plate");
        await queryRunner.dropForeignKey("plate", "restaurant_id");
    }

}
