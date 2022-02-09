import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env',
            validationSchema: Joi.object({
                NODE_ENV: Joi.string().valid('dev', 'prod', 'test').required(),
                NOTION_TOKEN: Joi.string().required(),
                DB_ID: Joi.string().required(),
                PORT: Joi.number(),
            }),
        }),
    ],
})
export class ConfigurationModule {}
