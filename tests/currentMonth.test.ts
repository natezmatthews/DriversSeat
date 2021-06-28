import dateIsInCurrentMonthAndYear from '../src/dateHelpers/dateIsInCurrentMonthAndYear';

test('current year and month', () => {
    const now = new Date();

    const result = dateIsInCurrentMonthAndYear(now.toISOString());
    expect(result).toBe(true);
})

const ONE_MONTH_IN_MS = 1000 /*sec*/ * 60 /*min*/ * 60 /*hour*/ * 24 /*day*/ * 30;

test('current year, different month', () => {
    // We'll look one month in the past, unless it's January, since that would break the 
    // part of the test where we keep the year the same
    const now = new Date();
    let dateToTest;
    if (now.getMonth() === 0) {
        dateToTest = new Date(Date.now() + ONE_MONTH_IN_MS);
    } else {
        dateToTest = new Date(Date.now() - ONE_MONTH_IN_MS);
    }

    const result = dateIsInCurrentMonthAndYear(dateToTest.toISOString());
    expect(result).toBe(false);
});

test('last year, this month', () => {
    const thisDateLastYear = new Date();
    thisDateLastYear.setFullYear(thisDateLastYear.getFullYear() - 1);

    const result = dateIsInCurrentMonthAndYear(thisDateLastYear.toISOString());
    expect(result).toBe(false);
});