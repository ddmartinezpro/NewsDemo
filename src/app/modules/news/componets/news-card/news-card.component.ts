import {Component, EventEmitter, Input, Output} from '@angular/core';
import {News} from "../../interfaces/news";

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.css'
})
export class NewsCardComponent {

  @Input() newsItem: News | null  = null;
  @Output() edit = new EventEmitter<News>();


  emitEdit(value: News): void {
    this.edit.emit(value);
  }
}
