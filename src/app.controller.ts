import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Throttle, ThrottlerGuard } from '@nestjs/throttler';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(ThrottlerGuard)
  @Throttle({default:{limit:3,ttl:60000}})
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
