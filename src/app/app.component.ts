import { Subscription } from "rxjs";
import { Component } from "@angular/core";
import { HeroQuantityService } from "./hero-quantity.service";
import { HeroService } from "./hero.service";
import { RouterJsonInfo } from "./app.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Tour of Heroes";
  heroQuantity: number;
  subscription: Subscription;
  jsonData: RouterJsonInfo;

  constructor(
    private heroQuantityService: HeroQuantityService,
    private heroService: HeroService
  ) {
    this.subscription = this.heroQuantityService
      .getHeroQuantity()
      .subscribe((quantity) => (this.heroQuantity = quantity.value));

    this.heroService.getJson().subscribe((resp: RouterJsonInfo) => {
      this.jsonData = resp;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
