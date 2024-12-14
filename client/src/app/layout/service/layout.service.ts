import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

/**
 * # LayoutService(Singleton)
 *
 * レイアウトを操作するユーティリティを提供する
 */
@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private sidebarBehaviorSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);

  /** constructor of {@link LayoutService}. */
  constructor() { }

  /** サイドバーの表示・非表示を切り替える */
  public toggleSidebar(): void {
    this.sidebarBehaviorSubject.next(
      !this.sidebarBehaviorSubject.value
    );
  }

  /** サイドバーの表示状態のBehaviorSubjectを返す */
  public get isSidebarToggled() { return this.sidebarBehaviorSubject };
}
