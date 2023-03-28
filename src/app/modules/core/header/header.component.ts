import {Component} from '@angular/core';
import MENU_ITEMS from "../../../../assets/menu.config.json"
import {HeaderMenuItem} from "../../../models/header-menu";

@Component({
  selector: 'ss-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  public _menuItems: HeaderMenuItem[] = MENU_ITEMS;
}
