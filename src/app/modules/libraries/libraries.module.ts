import {NgModule} from '@angular/core';
import {NgxTranslateComponent} from './ngx-translate/ngx-translate.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import { LibrariesComponent } from './libraries.component';

const routes: Routes = [
  {
    path: "",
    component: LibrariesComponent
  },
  {
    path: "ngx-translate",
    component: NgxTranslateComponent
  }
]

@NgModule({
  declarations: [
    NgxTranslateComponent,
    LibrariesComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class LibrariesModule {
}
