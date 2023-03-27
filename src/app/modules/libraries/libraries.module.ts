import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxTranslateComponent} from './ngx-translate/ngx-translate.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: "ngx-translate",
    component: NgxTranslateComponent
  }
]

@NgModule({
  declarations: [
    NgxTranslateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LibrariesModule {
}
