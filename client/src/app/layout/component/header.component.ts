import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Route, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  public links: Array<Route> = [];

  /** constructor of {@link HeaderComponent}. */
  public constructor() {}

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
}
