/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/user.module';
import { AppController } from './app.controller';

@Module({
  imports: [UsersModule, MongooseModule.forRoot('mongodb+srv://appserver:Tube%401light@testingninja.t105xmn.mongodb.net/Testingninja?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
