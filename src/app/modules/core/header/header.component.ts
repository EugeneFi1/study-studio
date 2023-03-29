import {Component} from '@angular/core';
import MENU_ITEMS from "../../../../assets/menu.config.json"
import {HeaderMenuItem, MenuItem} from "../../../models/header-menu";
import {StateService} from "../../../services/state.service";

@Component({
  selector: 'ss-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  public _menuItems: HeaderMenuItem[] = MENU_ITEMS;

  public constructor(private stateService: StateService) {
  }

  public _selectMenuItem(menuItem: HeaderMenuItem, subMenuItem: MenuItem): void {
    this.stateService.set({
      selectedMenuItem: {
        name: menuItem.name,
        routerLink: menuItem.routerLink
      },
      selectedSubMenuItem: subMenuItem
    })
  }
}
