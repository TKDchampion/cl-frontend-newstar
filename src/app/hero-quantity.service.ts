import { Observable, Subject } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class HeroQuantityService {
  private subject = new Subject();
  constructor() {}

  setHeroQuantity(quantity: number) {
    this.subject.next({ value: quantity });
  }

  getHeroQuantity(): Observable<any> {
    return this.subject.asObservable();
  }
}
