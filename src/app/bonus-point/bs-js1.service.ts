import { Injectable } from "@angular/core";

@Injectable()
export class BsJs1Service {
  constructor() {}
  private extend(arg: {
    arraySource: {
      value: string;
    }[];
    index: number;
    fn: (_source: {
      parent?: {
        value: string;
      };
      child?: {
        value: string;
      }[];
      value: string;
    }) => void;
  }) {
    arg.fn(arg.arraySource[arg.index]);

    return arg.arraySource;
  }

  getSample() {
    const arraySource = Array.from(Array(9), (_, index) => {
      return {
        value: undefined,
      };
    });

    this.extend({
      arraySource,
      index: 0,
      fn: (_source) => {
        _source.parent = arraySource[2];
        _source.value = "child_1_1";
      },
    });
    this.extend({
      arraySource,
      index: 1,
      fn: (_source) => {
        _source.parent = arraySource[2];
        _source.value = "child_1_2";
      },
    });
    this.extend({
      arraySource,
      index: 2,
      fn: (_source) => {
        _source.child = [arraySource[0], arraySource[1]];
        _source.value = "parent_1";
      },
    });
    this.extend({
      arraySource,
      index: 3,
      fn: (_source) => {
        _source.parent = arraySource[4];
        _source.value = "child_2_1";
      },
    });
    this.extend({
      arraySource,
      index: 4,
      fn: (_source) => {
        _source.child = [arraySource[3]];

        _source.value = "parent_2";
      },
    });
    this.extend({
      arraySource,
      index: 5,
      fn: (_source) => {
        _source.parent = arraySource[8];
        _source.value = "child_3_1";
      },
    });
    this.extend({
      arraySource,
      index: 6,
      fn: (_source) => {
        _source.parent = arraySource[8];
        _source.value = "child_3_2";
      },
    });
    this.extend({
      arraySource,
      index: 7,
      fn: (_source) => {
        _source.parent = arraySource[8];
        _source.value = "child_3_3";
      },
    });
    this.extend({
      arraySource,
      index: 8,
      fn: (_source) => {
        _source.child = [arraySource[5], arraySource[6], arraySource[7]];
        _source.value = "parent_3";
      },
    });

    const source = [
      arraySource[0],
      arraySource[1],
      arraySource[3],
      arraySource[5],
      arraySource[6],
      arraySource[7],
    ];

    const sample = {
      forEachChilds: (
        fn: (item: {
          value: number;
          parent?: {
            value: number;
            child: [];
          };
        }) => void
      ) => {
        source.forEach((item) => {
          fn(item);
        });
      },
      source,
    };

    return sample;
  }
}
