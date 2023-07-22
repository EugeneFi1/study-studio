import { NgModule } from '@angular/core';
import { AlgoComponent } from './algo.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { BinarySearchComponent } from './binary-search/binary-search.component';
import { CodeEditorModule } from '@ngstack/code-editor';
import { NzButtonModule } from 'ng-zorro-antd/button';

const routes: Routes = [
  {
    path: "",
    component: AlgoComponent
  },
  {
    path: "intro",
    component: IntroComponent
  },
  {
    path: "binary-search",
    component: BinarySearchComponent
  }
]

@NgModule({
  declarations: [
    AlgoComponent,
    IntroComponent,
    BinarySearchComponent
  ],
  imports: [
    NzButtonModule,
    SharedModule,
    CodeEditorModule.forRoot(),
    RouterModule.forChild(routes)
  ]
})
export class AlgoModule { }
