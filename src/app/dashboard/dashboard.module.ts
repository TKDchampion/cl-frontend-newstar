import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { HeroSearchComponent } from "../hero-search/hero-search.component";

@NgModule({
  declarations: [DashboardComponent, HeroSearchComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
