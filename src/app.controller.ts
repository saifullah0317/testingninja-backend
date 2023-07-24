/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
@Controller()
export class AppController {
  @Get()
  get():any{
    return {name:"check"};
}
}