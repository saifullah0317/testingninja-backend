/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Response, ResponseSchema } from 'src/Schemas/response.schema';
import { ResponseController } from './response.controller';
import { ResponseService } from './response.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Response.name, schema: ResponseSchema }])],
  controllers: [ResponseController],
  providers: [ResponseService],
  exports:[ResponseService]
})
export class ResponseModule {}