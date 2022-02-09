import { Module } from '@nestjs/common';
import { NotionModule } from './notion/notion.module';
import { ConfigurationModule } from './config.module';

@Module({
    imports: [ConfigurationModule, NotionModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
