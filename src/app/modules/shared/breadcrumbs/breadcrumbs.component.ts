import {Component} from '@angular/core';
import {StateService} from "../../../services/state.service";
import {Observable} from "rxjs";
import {MenuItem} from "../../../models/header-menu";

@Component({
  selector: 'ss-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.less']
})
export class BreadcrumbsComponent {
  public menuItem$: Observable<MenuItem> = this.stateService.select("selectedMenuItem");
  public subMenuItem$: Observable<MenuItem> = this.stateService.select("selectedSubMenuItem");

  public constructor(private stateService: StateService) {
  }
}
