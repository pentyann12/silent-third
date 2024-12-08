import { Component } from '@angular/core';
import { NewsComponent } from "./component/news.component";

@Component({
  selector: 'app-top-page',
  imports: [NewsComponent],
  templateUrl: './top-page.component.html',
  styleUrl: './top-page.component.scss'
})
export class TopPageComponent {

}
