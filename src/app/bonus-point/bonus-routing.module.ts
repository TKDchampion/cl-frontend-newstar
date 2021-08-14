import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BonusPointComponent } from "./bonus-point.component";

const routes: Routes = [{ path: "", component: BonusPointComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BonusPointRoutingModule {}
