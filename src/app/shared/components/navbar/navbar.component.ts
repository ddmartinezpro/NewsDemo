import { Component } from '@angular/core';
import {NewsService} from "../../../modules/news/services/news.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private newsService: NewsService) {
  }

  openModal(): void {
    this.newsService.showModal();
  }

}
