import { Component, OnInit } from '@angular/core';
import { News } from '../domain/news';
import { DatePipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-news',
  imports: [DatePipe, NgFor],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent implements OnInit {
  public newsList: Array<News> = []

  /** constructor of {@link NewsComponent}. */
  public constructor() {}

  public ngOnInit(): void {
    this.newsList = [
      {
        date: new Date(2024, 11, 8),
        category: 'release',
        description: '新規作成'
      },
      {
        date: new Date(2024, 11, 8),
        category: 'update',
        description: 'test'
      },
      {
        date: new Date(2024, 11, 8),
        category: 'update',
        description: 'test'
      },
    ]
  }
}
