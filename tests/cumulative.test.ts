import cumulative from '../src/helpers/cumulativeSpending';

/** DATA GENERATOR FOR EXPECTED RESULTS
 * Copy this into a console to get an array of form [{ day: 1, sum: 0 }...<days 2-30>...{ day: 31, sum: 0 }]
 * >> Array.from(Array(32).keys()).map(x => ({ day: x, sum: 0 })).slice(1);
 */

test('simple case: three-expenses', () => {
    const simple = [
        {
            day: 24,
            cost: 1
        },
        {
            day: 26,
            cost: 3
        },
        {
            day: 28,
            cost: 4
        }
    ];

    const result = cumulative(simple);
    expect(result).toStrictEqual([
        {
          "day": 1,
          "sum": 0
        },
        {
          "day": 2,
          "sum": 0
        },
        {
          "day": 3,
          "sum": 0
        },
        {
          "day": 4,
          "sum": 0
        },
        {
          "day": 5,
          "sum": 0
        },
        {
          "day": 6,
          "sum": 0
        },
        {
          "day": 7,
          "sum": 0
        },
        {
          "day": 8,
          "sum": 0
        },
        {
          "day": 9,
          "sum": 0
        },
        {
          "day": 10,
          "sum": 0
        },
        {
          "day": 11,
          "sum": 0
        },
        {
          "day": 12,
          "sum": 0
        },
        {
          "day": 13,
          "sum": 0
        },
        {
          "day": 14,
          "sum": 0
        },
        {
          "day": 15,
          "sum": 0
        },
        {
          "day": 16,
          "sum": 0
        },
        {
          "day": 17,
          "sum": 0
        },
        {
          "day": 18,
          "sum": 0
        },
        {
          "day": 19,
          "sum": 0
        },
        {
          "day": 20,
          "sum": 0
        },
        {
          "day": 21,
          "sum": 0
        },
        {
          "day": 22,
          "sum": 0
        },
        {
          "day": 23,
          "sum": 0
        },
        {
          "day": 24,
          "sum": 1
        },
        {
          "day": 25,
          "sum": 1
        },
        {
          "day": 26,
          "sum": 4
        },
        {
          "day": 27,
          "sum": 4
        },
        {
          "day": 28,
          "sum": 8
        },
        {
          "day": 29,
          "sum": 8
        },
        {
          "day": 30,
          "sum": 8
        }
      ]);
});

test('no expenses', () => {
  const result = cumulative([]);
  expect(result).toStrictEqual([
        {
          "day": 1,
          "sum": 0
        },
        {
          "day": 2,
          "sum": 0
        },
        {
          "day": 3,
          "sum": 0
        },
        {
          "day": 4,
          "sum": 0
        },
        {
          "day": 5,
          "sum": 0
        },
        {
          "day": 6,
          "sum": 0
        },
        {
          "day": 7,
          "sum": 0
        },
        {
          "day": 8,
          "sum": 0
        },
        {
          "day": 9,
          "sum": 0
        },
        {
          "day": 10,
          "sum": 0
        },
        {
          "day": 11,
          "sum": 0
        },
        {
          "day": 12,
          "sum": 0
        },
        {
          "day": 13,
          "sum": 0
        },
        {
          "day": 14,
          "sum": 0
        },
        {
          "day": 15,
          "sum": 0
        },
        {
          "day": 16,
          "sum": 0
        },
        {
          "day": 17,
          "sum": 0
        },
        {
          "day": 18,
          "sum": 0
        },
        {
          "day": 19,
          "sum": 0
        },
        {
          "day": 20,
          "sum": 0
        },
        {
          "day": 21,
          "sum": 0
        },
        {
          "day": 22,
          "sum": 0
        },
        {
          "day": 23,
          "sum": 0
        },
        {
          "day": 24,
          "sum": 0
        },
        {
          "day": 25,
          "sum": 0
        },
        {
          "day": 26,
          "sum": 0
        },
        {
          "day": 27,
          "sum": 0
        },
        {
          "day": 28,
          "sum": 0
        },
        {
          "day": 29,
          "sum": 0
        },
        {
          "day": 30,
          "sum": 0
        }
      ]);
})