import { Test, TestingModule } from '@nestjs/testing';
import { plainToInstance } from 'class-transformer';
import { ConfigurationModule } from '../../src/config.module';
import { CreateNotionDto } from './dto/create-notion.dto';
import { NotionController } from './notion.controller';
import { NotionService } from './notion.service';

describe('NotionController', () => {
    let controller: NotionController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [ConfigurationModule],
            controllers: [NotionController],
            providers: [NotionService],
        }).compile();

        controller = module.get<NotionController>(NotionController);
    });

    describe('notion controller 테스트', () => {
        it('/create', async () => {
            const TestData = {
                task_type: '테스트1',
                content: 'controller test',
            };
            const createNotionDto = plainToInstance(CreateNotionDto, TestData);

            expect(await controller.create(createNotionDto)).toBe(true);
        });

        // it('/search', async () => {
        //     const SearchKeyWord = 'TestKeyWord';

        //     expect(await controller.search(SearchKeyWord)).toBe(SearchKeyWord);
        // });
    });
});
