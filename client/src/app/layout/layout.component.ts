import { Component, Inject, OnInit } from '@angular/core';
import { HeaderComponent } from "./component/header.component";
import { LayoutService } from './service/layout.service';
import { AsyncPipe } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

/**
 * # レイアウト定義
 */
@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, AsyncPipe],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit{
  public toggled: null | BehaviorSubject<boolean> = null;

  /** constructor of {@link LayoutComponent}. */
  public constructor(
    @Inject(LayoutService) private readonly layoutService: LayoutService
  ) { }

  public ngOnInit(): void {
    this.toggled = this.layoutService.isSidebarToggled;
  }

  /** サイドバーの表示・非表示を切り替える */
  public toggleSidebar(): void {
    this.layoutService.toggleSidebar();
  }
}
