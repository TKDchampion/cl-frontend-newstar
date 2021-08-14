import { Component, OnInit } from "@angular/core";

import { Hero } from "../hero";
import { HeroQuantityService } from "../hero-quantity.service";
import { HeroService } from "../hero.service";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private heroQuantityService: HeroQuantityService
  ) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
      this.heroQuantityService.setHeroQuantity(this.heroes.length);
    });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    const id =
      this.heroes.length > 0 ? this.heroes[this.heroes.length - 1].id + 1 : 0;
    const heroInfo: Hero = { name, id };
    this.heroService.addHero(heroInfo).subscribe((hero) => {
      this.heroes.push(hero);
      this.heroQuantityService.setHeroQuantity(this.heroes.length);
    });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService
      .deleteHero(hero)
      .subscribe((hero) =>
        this.heroQuantityService.setHeroQuantity(this.heroes.length)
      );
  }
}
