import {Component} from '@angular/core';
import MENU_ITEMS from "../../../../assets/menu.config.json"
import {HeaderMenuItem} from "../../../models/header-menu";
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

  public _selectMenuItem(menuItemName: string, subMenuItemName: string): void {
    this.stateService.set({
      selectedMenuItemName: menuItemName,
      selectedSubMenuItemName: subMenuItemName
    })
  }
}
