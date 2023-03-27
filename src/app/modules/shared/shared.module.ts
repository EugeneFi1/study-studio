import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {TranslateModule} from "@ngx-translate/core";

const ANGULAR_MATERIAL = [
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule
]

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    TranslateModule,
    ANGULAR_MATERIAL
  ]
})
export class SharedModule {
}
