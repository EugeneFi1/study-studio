import {Component, OnInit} from '@angular/core';
import {StateService} from "./services/state.service";
import {Observable} from "rxjs";
import {BreadcrumbItem} from "./models/breadcrumbs";
import MENU_ITEMS from "../assets/menu.config.json"
import {Page} from "./models/page-item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  public _breadcrumbItems$: Observable<Page[]> = this.stateService.select("breadcrumbs");

  constructor(private stateService: StateService) {
  }

  public ngOnInit(): void {
    this.stateService.setPages(MENU_ITEMS);
  }
}
