import { sortBy } from "lodash";
import getDaysInMonth from "../dateHelpers/getDaysInMonth";
import { DayAndCost, DayAndSum } from "../sharedTypes";
import integerArray from "./integerArray";

export default function cumulativeSpending(series: DayAndCost[]): DayAndSum[] {
    /**
     * Take a list of spending amounts labeled with the day-of-the-month that the spending happened,
     * and produce an array representing the total spending up to each day of the month in question.
     * 
     * @param  { Array<{day: number, cost: number}> } series The 'day' is the day of the month, 1-based. The number
     * is the dollar amount spent in that recorded expense.
     * 
     * @return { Array<{day: number, sum: number}> } The 'sum' is how much cumulatively was spent by day 'day' of this
     * month, going off the information we have from the passed in series.
     */

    const today = new Date();
    const daysInCurrentMonth = getDaysInMonth(today.getMonth(), today.getFullYear());
    if (series.length === 0) {
        // Array of form [{ day: 1, sum: 0 }...{ day: daysInCurrentMonth, sum: 0 }]
        return integerArray(daysInCurrentMonth + 1).map((x): DayAndSum => ({ day: x, sum: 0 })).slice(1);
    }

    const sorted = sortBy(series, 'day'); // Sort by the day, ascending

    const toReturn = [];
    let expenseIndex = 0;
    let sum = 0;
    for (let day = 1; day <= daysInCurrentMonth; day++) {
        // Progress up the list of expenses, adding their cost to the sum if they're on or before this day
        while (expenseIndex < sorted.length && sorted[expenseIndex].day <= day) {
            sum = sum + sorted[expenseIndex].cost;
            expenseIndex++;
        }
        toReturn.push({ day, sum });
    }
    return toReturn;
}