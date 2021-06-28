/**
 * Only expenses from this month
 * 
 * Cumulative
 */

import { DayAndCost } from "../sharedTypes";
import getDaysInMonth from "./getDaysInMonth";
import oneBasedIntegerArray from "./oneBasedIntegerArray";

export default function cumulative(series: DayAndCost[]) {
    const today = new Date();
    const daysInCurrentMonth = getDaysInMonth(today.getMonth(), today.getFullYear());
    if (series.length === 0) {
        // Array of form [{ day: 1, sum: 0 }...{ day: daysInCurrentMonth, sum: 0 }]
        return oneBasedIntegerArray(daysInCurrentMonth + 1).map(x => ({ day: x, sum: 0 })).slice(1);
    }

    const toReturn = [];
    let i = 0;
    let sum = 0;
    for (let day = 1; day <= daysInCurrentMonth; day++) {
        // Progress up the list of expenses, adding their cost to the sum if they're on or before this date
        while (i < series.length && series[i].day <= day) {
            sum = sum + series[i].cost;
            i++;
        }
        toReturn.push({ day, sum });
    }
    return toReturn;
}