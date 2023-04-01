import {Page} from "./page-item";

export interface State {
  selectedPage: Page;
  pages: Record<string, Page>;
  breadcrumbs: Page[];
}
