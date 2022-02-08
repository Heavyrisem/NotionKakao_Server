import { isString, IsString } from "class-validator";

export class CreateNotionDto {
    @IsString()
    readonly db_id: string;

    @IsString()
    task_type: string;

    @IsString()
    content: string;
}