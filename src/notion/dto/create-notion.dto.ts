import { IsString } from "class-validator";
import { CreatePageParameters } from "@notionhq/client/build/src/api-endpoints";


export class CreateNotionDto {
    @IsString()
    readonly task_type: string;

    @IsString()
    readonly content: string;

    toObject(): CreatePageParameters {
        return {
            parent: {
                type: "database_id",
                database_id: process.env.DB_ID
            },
            properties: {
                "유형": {
                    type: "select",
                    select: { name: this.task_type }
                },
                "내용": {
                    type: "title",
                    title: [{ text: { content: this.content } }]
                }
            }
        }
    }
}