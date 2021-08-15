import { Component, OnInit } from "@angular/core";
import { BsJs1Service } from "./bs-js1.service";
import { Observable, of, Subscription } from "rxjs";
import { concatMap, delay, switchMap, take, tap } from "rxjs/operators";

@Component({
  selector: "app-bonus-point",
  templateUrl: "./bonus-point.component.html",
  styleUrls: ["./bonus-point.component.css"],
})
export class BonusPointComponent implements OnInit {
  subscription: Subscription;
  constructor(private bsJs1Service: BsJs1Service) {}

  ngOnInit() {}

  redirectToKeiPage() {
    location.href = `${location.protocol}//kei.careline.localhost:${location.port}/bonusPoint`;
  }

  redirectToAnnPage() {
    location.href = `${location.protocol}//ann.careline.localhost:${location.port}/bonusPoint`;
  }

  answerCookie1() {
    //ToDo..
    // I haven't succeeded yet, but I know that different subdomains can be set using ";domain=.XXX".
    const cookieName = "key";
    const cookieValue = "ck1";
    const cookieDate = new Date();
    cookieDate.setMonth(cookieDate.getMonth() + 12);
    document.cookie =
      cookieName +
      "=" +
      cookieValue +
      ";expires=" +
      cookieDate +
      `;domain=.careline.localhost;path=/`;
  }

  answerRxjs1() {
    const first$ = of("first", 2000).pipe(tap(() => console.log("first")));
    // Confirmation of synchronisation, so I add delay to test
    const second$ = of("second", 1500).pipe(
      delay(4000),
      tap(() => console.log("second"))
    );
    const third$ = of("thrid", 800).pipe(tap(() => console.log("thrid")));

    const myFunc = (): Observable<unknown> => {
      return of("start");
    };

    // 考題限制 : 執行順序需為 : first$ => second$ => third$
    // 預期的Console結果 :
    //  first
    //  second
    //  third

    // ToDo...
    myFunc()
      .pipe(
        tap((res) => console.log(res)),
        concatMap((res) => first$),
        concatMap((res) => second$),
        concatMap((res) => third$),
        take(1)
      )
      .subscribe();
  }

  answerJs1() {
    let result: string;
    let cache: {
      value: number;
      parent?: {
        value: number;
        child: [];
      };
    };

    const resultArray = [];
    this.bsJs1Service.getSample().forEachChilds((child) => {
      // ToDo : 實作你的解決方案...
      if (!cache || cache.parent.value !== child.parent.value) {
        child.parent.child.forEach((item) => resultArray.push(item["value"]));
        resultArray.push(child.parent.value);
        cache = child;
      }

      result = resultArray.join(" , ");
    });

    // 預期alert的結果 => js 1 answer : child_1_1 , child_1_2 , parent_1 , child_2_1 ,  parent_2 ,child_3_1 , child_3_2 , child_3_3 , parent_3
    alert(`js 1 answer : ${result}`);
  }
}
