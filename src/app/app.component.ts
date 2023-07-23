import { Component, OnInit } from '@angular/core';
import { TABS, routes } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  public _tabs: {
    title: string;
    subMenu: { title: string; tab: string; path: string }[];
  }[] = [];
  public _isCollapsed = false;
  public _tabIcon: Record<string, string> = {
    [TABS.ANGULAR]: "rocket",
    [TABS.DESIGN_PATTERNS]: "code",
    [TABS.CSS]: "format-painter"
  }

  public ngOnInit(): void {
    const filteredRoutes: { title: string; tab: string; path: string }[] =
      routes
        .filter((route) => route.data)
        .map((route) => ({
          title: route.data?.['title'],
          tab: route.data?.['tab'],
          path: route.path || '',
        }));
    Object.values(TABS).forEach((tab) => {
      this._tabs.push({
        title: tab,
        subMenu: filteredRoutes.filter((menu) => menu.tab === tab),
      });
    });
  }
}
