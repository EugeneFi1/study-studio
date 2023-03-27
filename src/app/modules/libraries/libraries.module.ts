import {NgModule} from '@angular/core';
import {NgxTranslateComponent} from './ngx-translate/ngx-translate.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../shared/shared.module";

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
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class LibrariesModule {
}
