import {Component} from '@angular/core';
import MENU_ITEMS from "../../../../assets/menu.config.json"
import {Page, PageBE} from "../../../models/page-item";
import {StateService} from "../../../services/state.service";
import {FlatTreeControl} from "@angular/cdk/tree";
import {MatTreeFlatDataSource, MatTreeFlattener} from "@angular/material/tree";

interface ExampleFlatNode extends PageBE {
  expandable: boolean;
  level: number;
}

@Component({
  selector: 'ss-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  public treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );
  private _transformer = (node: PageBE, level: number) => {
    return {
      ...node,
      expandable: !!node.subMenu && node.subMenu.length > 0,
      name: node.name,
      level: level,
    };
  };

  private treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.subMenu,
  );
  public dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  public hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
  public _menuItems: PageBE[] = MENU_ITEMS;

  public constructor(private stateService: StateService) {
  }

  public _selectMenuItem(page: Page): void {
    this.stateService.set({selectedPage: page})
  }

  public _selectTreeData(page: Page): void {
    this.stateService.set({selectedPage: page})
    const subMenu = MENU_ITEMS.find(({id}) => id === page.id)?.subMenu;
    this.dataSource.data = subMenu || [{
      id: "",
      subMenu: [],
      name: "",
      routerLink: ""
    }]
  }
}
