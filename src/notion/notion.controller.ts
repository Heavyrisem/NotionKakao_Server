import { Body, Controller, Post } from '@nestjs/common';
import { CreateNotionDto } from './dto/create-notion.dto';
import { NotionService } from './notion.service';

@Controller('notion')
export class NotionController {
    constructor(private readonly notionService: NotionService) {}

    @Post()
    create(@Body() createNotionDto: CreateNotionDto) {
        console.log("createNotionDto", createNotionDto);
        return this.notionService.createBoardData(createNotionDto);
    }
}
