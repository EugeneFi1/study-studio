interface SharedPageParams {
  id: string;
  routerLink: string,
  name: string;
}

export interface Page extends SharedPageParams {
  parentId?: string;
}

export interface PageBE extends SharedPageParams{
  subMenu?: PageBE[];
}
