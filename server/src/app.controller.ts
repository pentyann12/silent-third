import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { News } from './domain/news';

@Controller({})
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('news')
  public getNews(): Array<News> {
    return this.appService.getNews();
  }
}
