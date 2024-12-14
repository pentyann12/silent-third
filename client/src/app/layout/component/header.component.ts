import { NgFor } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Route, RouterLink } from '@angular/router';
import { LayoutService } from '../service/layout.service';

/**
 * # ページヘッダ
 */
@Component({
  selector: 'app-header',
  imports: [RouterLink, NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  public links: Route[] = [];

  /** constructor of {@link HeaderComponent}. */
  public constructor(
    @Inject(LayoutService) private readonly layoutService: LayoutService
  ) { }

  public ngOnInit(): void {
    this.links = [
      {
        path: '/',
        title: 'test'
      },
      {
        path: '/',
        title: 'test'
      },
      {
        path: '/',
        title: 'test'
      }
    ]
  }

  /** サイドバーの表示・非表示を切り替える */
  public toggleSidebar(): void {
    this.layoutService.toggleSidebar();
  }
}
