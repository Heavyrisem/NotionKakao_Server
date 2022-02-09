import { Injectable } from '@nestjs/common';
import { Client } from '@notionhq/client';
import { CreateNotionDto } from './dto/create-notion.dto';

@Injectable()
export class NotionService {
    Client = new Client({ auth: process.env.NOTION_TOKEN });

    async createBoardData(createNotionDto: CreateNotionDto): Promise<boolean> {
        return this.Client.pages
            .create(createNotionDto.toObject())
            .then(() => false)
            .catch(() => false);
    }
}
