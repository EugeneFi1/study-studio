import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {SharedModule} from "../shared/shared.module";
import {RouterLink} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HomePageComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    HomePageComponent,
    FooterComponent
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
