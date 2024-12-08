import { Injectable } from '@nestjs/common';
import { News } from './domain/news';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  /** ニュース配列を返す */
  public getNews(): Array<News> {
    return [
      {
        date: new Date(2024, 11, 8),
        category: 'release',
        description: '新規作成'
      },
      {
        date: new Date(2024, 11, 8),
        category: 'update',
        description: 'test1'
      },
      {
        date: new Date(2024, 11, 8),
        category: 'update',
        description: 'test2'
      },
      {
        date: new Date(2024, 11, 8),
        category: 'update',
        description: 'test4'
      },
      {
        date: new Date(2024, 11, 8),
        category: 'update',
        description: 'test5'
      },
    ];
  }
}
