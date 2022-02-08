import { Test, TestingModule } from '@nestjs/testing';
import { CreateNotionDto } from './dto/create-notion.dto';
import { NotionController } from './notion.controller';

describe('NotionController', () => {
  let controller: NotionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotionController],
    }).compile();

    controller = module.get<NotionController>(NotionController);
  });

  describe('notion controller test', () => {
    it('/create', () => {
      expect(controller.create(new CreateNotionDto())).toBe("SUCCESS");
    })
  });
});
