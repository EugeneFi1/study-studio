import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";

const ANGULAR_MATERIAL = [
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ANGULAR_MATERIAL
  ],
  exports: [
    ANGULAR_MATERIAL
  ]
})
export class SharedModule {
}
