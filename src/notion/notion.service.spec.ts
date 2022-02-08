import { Test, TestingModule } from '@nestjs/testing';
import { CreateNotionDto } from './dto/create-notion.dto';
import { NotionService } from './notion.service';

describe('NotionService', () => {
  let service: NotionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotionService],
    }).compile();

    service = module.get<NotionService>(NotionService);
  });

  it('데이터 생성 테스트', () => {
    const dto = new CreateNotionDto();

    expect(service.createBoardData(dto)).toBe(true);
  });
});
