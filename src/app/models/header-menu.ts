interface SubMenuItem {
  routerLink: string,
  name: string;
}

export interface HeaderMenuItem {
  name: string,
  subMenu: SubMenuItem[]
}
