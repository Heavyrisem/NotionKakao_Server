import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NotionController } from './notion.controller';
import { NotionService } from './notion.service';

@Module({
  imports: [ConfigModule],
  controllers: [NotionController],
  providers: [NotionService]
})
export class NotionModule {}
