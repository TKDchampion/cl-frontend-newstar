import { Subscription } from "rxjs";
import { Component } from "@angular/core";
import { HeroQuantityService } from "./hero-quantity.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Tour of Heroes";
  heroQuantity: number;
  subscription: Subscription;

  constructor(private heroQuantityService: HeroQuantityService) {
    this.subscription = this.heroQuantityService
      .getHeroQuantity()
      .subscribe((quantity) => (this.heroQuantity = quantity.value));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
