import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {TranslateModule} from "@ngx-translate/core";
import {MatSidenavModule} from "@angular/material/sidenav";
import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';
import {RouterLink} from "@angular/router";
import {MatTreeModule} from "@angular/material/tree";
import { PageComponent } from './page/page.component';

const ANGULAR_MATERIAL = [
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
  MatSidenavModule,
  MatTreeModule
]

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    ANGULAR_MATERIAL,
    RouterLink
  ],
  declarations: [
    BreadcrumbsComponent,
    PageComponent
  ],
  exports: [
    CommonModule,
    TranslateModule,
    ANGULAR_MATERIAL,
    BreadcrumbsComponent,
    PageComponent
  ]
})
export class SharedModule {
}
