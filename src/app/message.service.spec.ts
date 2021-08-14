import { TestBed, inject } from "@angular/core/testing";

import { MessageService } from "./message.service";

describe("MessageService", () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageService],
    });
    service = TestBed.get(MessageService);
  });

  it("should be created", inject(
    [MessageService],
    (service: MessageService) => {
      expect(service).toBeTruthy();
    }
  ));

  describe(`'clear' function testing`, () => {
    it(`when you input messages > 5, should clear first five strokes`, () => {
      service.messages = FakeData;
      service.clear();
      expect(service.messages).toEqual([
        "HeroService: deleted hero id=15",
        "HeroService: deleted hero id=16",
        "HeroService: deleted hero id=17",
        "HeroService: deleted hero id=18",
        "HeroService: deleted hero id=19",
        "HeroService: deleted hero id=20",
      ]);
    });

    it(`when you input messages <= 5, should clear all`, () => {
      service.messages = [
        "HeroService: fetched heroes",
        "HeroService: deleted hero id=11",
        "HeroService: deleted hero id=12",
      ];
      service.clear();
      expect(service.messages).toEqual([]);
    });
  });
});

const FakeData = [
  "HeroService: fetched heroes",
  "HeroService: deleted hero id=11",
  "HeroService: deleted hero id=12",
  "HeroService: deleted hero id=13",
  "HeroService: deleted hero id=14",
  "HeroService: deleted hero id=15",
  "HeroService: deleted hero id=16",
  "HeroService: deleted hero id=17",
  "HeroService: deleted hero id=18",
  "HeroService: deleted hero id=19",
  "HeroService: deleted hero id=20",
];
