import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {TranslateModule} from "@ngx-translate/core";
import {MatSidenavModule} from "@angular/material/sidenav";
import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';

const ANGULAR_MATERIAL = [
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
  MatSidenavModule
]

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    ANGULAR_MATERIAL
  ],
  declarations: [
    BreadcrumbsComponent
  ],
  exports: [
    CommonModule,
    TranslateModule,
    ANGULAR_MATERIAL,
    BreadcrumbsComponent
  ]
})
export class SharedModule {
}
