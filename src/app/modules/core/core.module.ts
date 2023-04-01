import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {SharedModule} from "../shared/shared.module";
import {RouterLink} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        RouterLink,
        MatIconModule
    ]
})
export class CoreModule {
}
