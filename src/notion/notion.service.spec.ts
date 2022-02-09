import { Test, TestingModule } from '@nestjs/testing';
import { plainToInstance } from 'class-transformer';
import { ConfigurationModule } from '../../src/config.module';
import { CreateNotionDto } from './dto/create-notion.dto';
import { NotionService } from './notion.service';

describe('NotionService', () => {
    let service: NotionService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [ConfigurationModule],
            providers: [NotionService],
        }).compile();

        service = module.get<NotionService>(NotionService);
    });

    it('데이터 생성 테스트', async () => {
        const TestData = { task_type: '테스트1', content: 'service test' };
        const createNotionDto = plainToInstance(CreateNotionDto, TestData);

        expect(await service.createBoardData(createNotionDto)).toBe(true);
    });
});
