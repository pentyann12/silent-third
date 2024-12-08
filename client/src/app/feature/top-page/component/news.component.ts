import { Component, Inject, OnInit } from '@angular/core';
import { News } from '../domain/news';
import { DatePipe, NgFor } from '@angular/common';
import { TopPageService } from '../service/top-page.service';

/**
 * # ニュース表示欄
 */
@Component({
  selector: 'app-news',
  imports: [DatePipe, NgFor],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent implements OnInit {
  public newsList: News[] = []

  /** constructor of {@link NewsComponent}. */
  public constructor(
    @Inject(TopPageService) private readonly topPageService: TopPageService
  ) {}

  public ngOnInit(): void {
    this.topPageService.fetchNews().subscribe({
      next: response => this.newsList = response
    });
  }
}
