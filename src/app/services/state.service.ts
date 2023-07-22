import {RxState} from "@rx-angular/state";
import {Injectable} from "@angular/core";
import {State} from "../models/state";
import {Page, PageBE} from "../models/page-item";
import {combineLatest, map, startWith} from "rxjs";

const homeBreadcrumb = {
  id: "home",
  name: "Home",
  routerLink: "/"
};

@Injectable({providedIn: "root"})
export class StateService extends RxState<State> {
  private pagesSet: Record<string, Page> = {};

  constructor() {
    super();
    this.connect("breadcrumbs", combineLatest([
      this.select("selectedPage"),
      this.select("pages")
    ]).pipe(
      map(([selectedPage, pages]) => {
        const result: Page[] = [];
        const pushSelectedPageParentsHierarchy = (id: string | undefined) => {
          if (!id) {
            return;
          }
          result.push(pages[id])
          pushSelectedPageParentsHierarchy(pages[id]?.parentId)
        }
        pushSelectedPageParentsHierarchy(selectedPage.id)
        result.push(homeBreadcrumb)
        result.reverse();
        console.log(result)
        return result.filter(value => !!value);
      }),
      startWith([homeBreadcrumb])
    ))
  }

  public setPages(pages: PageBE[]): void {
    this.pagesSet = {};
    pages.forEach(page => this.proceedPagesWithSubMenu(page));
    this.set({pages: {...this.pagesSet}})
  }

  private proceedPagesWithSubMenu(page: PageBE): void {
    if (!page) {
      return;
    }
    if (!this.pagesSet[page.id]) {
      this.pagesSet[page.id] = {
        ...page
      }
    }
    page.subMenu?.forEach(childPage => {
      this.pagesSet[childPage.id] = {
        ...childPage,
        parentId: page.id
      }
      this.proceedPagesWithSubMenu(childPage);
    })
  }
}


