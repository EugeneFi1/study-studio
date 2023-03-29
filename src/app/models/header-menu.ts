export interface MenuItem {
  routerLink: string,
  name: string;
}

export interface HeaderMenuItem extends MenuItem {
  subMenu: MenuItem[]
}
