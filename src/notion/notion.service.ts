import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Client } from "@notionhq/client";
import { CreateNotionDto } from './dto/create-notion.dto';

@Injectable()
export class NotionService {
    constructor(private readonly config: ConfigService) {
        console.log(config.get('NOTION_TOKEN'));
    }
    Client = new Client({ auth: process.env.NOTION_TOKEN });

    createBoardData(createNotionDto: CreateNotionDto): Promise<boolean> {
        return this.Client.pages.create(createNotionDto.toObject()).catch(() => false).then(() => true);
    }
}
