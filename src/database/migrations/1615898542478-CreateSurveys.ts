import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSurveys1615895081350 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await  queryRunner.createTable(
            new Table({
                    name:"surveys",
                    columns: [
                        {
                            name:"id",
                            type:"uuid",
                            isPrimary:true
                        },
                        {
                            name: "title",
                            type:"varchar"
                        },
                        {
                            name:"descripition",
                            type:"varchar",
                        },
                        {
                            name:"created_at",
                            type:"timestamp",
                            default: "now()"
                        }
                    ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("surveys")
    }

}
