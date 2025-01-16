import {Component, OnInit} from '@angular/core';
import {NewsService} from "../../services/news.service";
import {News} from "../../interfaces/news";

@Component({
  selector: 'app-news-principal',
  templateUrl: './news-principal.component.html',
  styleUrl: './news-principal.component.css'
})
export class NewsPrincipalComponent implements OnInit{

  sourcesList: {value: string, label: string}[] = [];

  sortBy: 'publishedAt' | 'popularity' | 'relevancy' = 'publishedAt';
  newsNumber: number = 5;
  page: number = 1
  total: number | null = null;
  sourcesSelected: string[] = [];
  query: string = 'Deporte'

  newsList: News[] = [];

  selectedNew: News | null = null;

  editModalShow = false;

  newTitulo: string = '';
  newDesc: string = '';
  newCont: string = '';
  indiceAEditar: number = 0;

  filtroModalShow = false;



  constructor(private  newsService: NewsService) {
    this.newsService.modalState$.subscribe((show) => {
      if (show) {
        this.filtroModalShow = true;
      }
    });
  }

  ngOnInit(): void {
    this.newsService.getSources().subscribe({
      next: (rsp) => this.sourcesList = rsp.sources.map((e: any) => ({
        value: e.id,
        label: e.name,
      })),
      error: (e) => console.error(e),
    });

    this.filtrar();
  }

  onPageChange(value: number): void {
    this.page = value;
    this.filtrar();
    const element = document.getElementById("top");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  onPageSizeChange(value: number): void {
    this.newsNumber = value;
    this.page = 1;
    this.filtrar();
  }

  filtrar(): void {
    this.newsService.getNews(this.query, this.newsNumber, this.page, this.sortBy, this.sourcesSelected).subscribe({
      next: (rsp) => {
        this.newsList = rsp.articles;
        this.total = rsp.totalResults;
        if (this.newsList?.length > 0) {
          this.selectedNew = this.newsList[0];
        }
      },
      error: (e) => console.error(e),
    });
  }

  editEvent(value: News): void {
    this.newTitulo = value.title
    this.newDesc = value.description
    this.newCont = value.content
    this.indiceAEditar = this.newsList.findIndex(news => news === value);
    this.editModalShow = true;
  }

  editModalClose(): void {
    this.editModalShow = false;
    this.newTitulo = '';
    this.newDesc = '';
    this.newCont = '';
  }

  edit(): void {
    this.newsList[this.indiceAEditar].title = this.newTitulo;
    this.newsList[this.indiceAEditar].description = this.newDesc;
    this.newsList[this.indiceAEditar].content = this.newCont;
    this.editModalClose();
  }

  closeFiltroModal(): void {
    this.filtroModalShow = false;
    this.newsService.hideModal();
  }
}
