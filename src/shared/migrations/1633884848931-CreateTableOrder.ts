import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateTableOrder1633884848931 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "order",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                },
                {
                    name: "user_id",
                    type: "uuid"
                },
                {
                    name: "plate_id",
                    type: "uuid",
                    
                },
                {
                    name: "price_total",
                    type: "integer"
                },
                {
                    name: "estimated_time",
                    type: "varchar"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                }
            ]
        }));

        await queryRunner.createForeignKey("order", new TableForeignKey({
            columnNames: ["user_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "user",
            onDelete: "RESTRICT"
        }));

        await queryRunner.createForeignKey("order", new TableForeignKey({
            columnNames: ["plate_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "plate",
            onDelete: "RESTRICT"
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("order");
        await queryRunner.dropForeignKey("order", "user_id");
        await queryRunner.dropForeignKey("order", "plate_id");
    }

}
