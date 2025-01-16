import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsPrincipalComponent } from './componets/news-principal/news-principal.component';
import { NewsCardComponent } from './componets/news-card/news-card.component';
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
import {NzCardComponent} from "ng-zorro-antd/card";
import {FormsModule} from "@angular/forms";
import {NzOptionComponent, NzSelectComponent} from "ng-zorro-antd/select";
import {NzListComponent, NzListItemComponent} from "ng-zorro-antd/list";
import {NzPaginationComponent} from "ng-zorro-antd/pagination";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {RouterLink} from "@angular/router";
import {NzImageDirective} from "ng-zorro-antd/image";
import {NzInputDirective} from "ng-zorro-antd/input";
import {NzTooltipDirective} from "ng-zorro-antd/tooltip";
import {NzEmptyComponent} from "ng-zorro-antd/empty";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {NzModalComponent, NzModalModule} from "ng-zorro-antd/modal";



@NgModule({
  declarations: [
    NewsPrincipalComponent,
    NewsCardComponent,
  ],
  imports: [
    CommonModule,
    NzColDirective,
    NzCardComponent,
    FormsModule,
    NzSelectComponent,
    NzListComponent,
    NzListItemComponent,
    NzPaginationComponent,
    NzButtonComponent,
    RouterLink,
    NzImageDirective,
    NzInputDirective,
    NzRowDirective,
    NzOptionComponent,
    NzTooltipDirective,
    NzEmptyComponent,
    NzIconDirective,
    NzModalComponent,
    NzModalModule
  ]
})
export class NewsModule { }
