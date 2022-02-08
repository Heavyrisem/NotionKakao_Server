import { Body, Controller, Post } from '@nestjs/common';
import { CreateNotionDto } from './dto/create-notion.dto';

@Controller('notion')
export class NotionController {

    @Post()
    create(@Body() createNotionDto: CreateNotionDto) {
        console.log("createNotionDto", createNotionDto);
        return "SUCCESS";
    }
}
