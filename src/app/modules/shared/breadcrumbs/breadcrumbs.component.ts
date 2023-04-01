import {Component, Input} from '@angular/core';
import {StateService} from "../../../services/state.service";
import {Observable} from "rxjs";
import {Page} from "../../../models/page-item";
import {BreadcrumbItem} from "../../../models/breadcrumbs";

@Component({
  selector: 'ss-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.less']
})
export class BreadcrumbsComponent {
  @Input() public items: Page[] | null | undefined;
  public constructor(private stateService: StateService) {
  }

  public _selectMenuItem(page: Page): void {
    this.stateService.set({selectedPage: page})
  }
}
