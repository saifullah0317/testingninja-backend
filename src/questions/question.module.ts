/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Question, QuestionSchema } from 'src/Schemas/question.schema';
import { QuestionController } from './question.controller';
import { QuestionService } from './question.service';
import { TestModule } from 'src/tests/test.module';

@Module({
  imports: [TestModule, MongooseModule.forFeature([{ name: Question.name, schema: QuestionSchema }])],
  controllers: [QuestionController],
  providers: [QuestionService],
  exports:[QuestionService]
})
export class QuestionModule {}