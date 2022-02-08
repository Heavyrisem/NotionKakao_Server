import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { NotionModule } from './notion/notion.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UsersModule, NotionModule, ConfigModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
