import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "./modules/core/home-page/home-page.component";

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent,
  },
  {
    path: "libraries",
    loadChildren: () => import("./modules/libraries/libraries.module").then(m => m.LibrariesModule)
  },
  {
    path: "algo",
    loadChildren: () => import("./modules/algo/algo.module").then(m => m.AlgoModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
