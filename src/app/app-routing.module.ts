import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";

const routes: Routes = [
  { path: "", redirectTo: "/cl-dashboard", pathMatch: "full" },
  {
    path: "cl-dashboard",
    loadChildren: () =>
      import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
  },
  { path: "detail/:id", component: HeroDetailComponent },
  {
    path: "cl-heroes",
    loadChildren: () =>
      import("./heroes/heroes.module").then((m) => m.HeroesModule),
  },
  {
    path: "cl-bonusPoint",
    loadChildren: () =>
      import("./bonus-point/bonus-point.module").then(
        (m) => m.BonusPointModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
