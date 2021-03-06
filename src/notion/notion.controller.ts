import { HttpStatus } from '@nestjs/common';
import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ResponseDto } from '@app/common-config/res/response.dto';
import { CreateNotionDto } from './dto/create-notion.dto';
import { NotionService } from './notion.service';

@Controller('notion')
export class NotionController {
    constructor(private readonly notionService: NotionService) {}

    @Post()
    async create(@Body() createNotionDto: CreateNotionDto): Promise<ResponseDto<string>> {
        const createResult = await this.notionService.createBoardData(createNotionDto);

        if (createResult) {
            return ResponseDto.OK();
        } else {
            return ResponseDto.ERROR_WITH('오류가 발생했습니다.', HttpStatus.BAD_REQUEST);
        }
    }

    // @Get('/search')
    // async search(@Query('keyword') keyword: string) {
    //     console.log(keyword);
    //     return keyword;
    // }
}
