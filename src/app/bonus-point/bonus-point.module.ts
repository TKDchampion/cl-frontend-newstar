import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BonusPointComponent } from "./bonus-point.component";
import { BsJs1Service } from "./bs-js1.service";
import { BonusPointRoutingModule } from "./bonus-routing.module";

@NgModule({
  imports: [CommonModule, BonusPointRoutingModule],
  declarations: [BonusPointComponent],
  exports: [BonusPointComponent],
  providers: [BsJs1Service],
})
export class BonusPointModule {}
