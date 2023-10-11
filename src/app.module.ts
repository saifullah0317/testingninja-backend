/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose' ;
import { UsersModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';
import { TestModule } from './tests/test.module';
import { ConfigModule } from '@nestjs/config';
import { QuestionModule } from './questions/question.module';
import { AttempterModule } from './attempters/attempter.module';
import { ResponseModule } from './responses/response.module';
import { ResultModule } from './results/result.module';

@Module({
  imports: [UsersModule, TestModule, QuestionModule, AttempterModule, ResponseModule, ResultModule, AuthModule, ConfigModule.forRoot({isGlobal:true}), MongooseModule.forRoot(process.env.MONGO_URI)],
  controllers: [],
  providers: [],
})
export class AppModule {}
