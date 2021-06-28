/**
 * Only expenses from this month
 * 
 * Cumulative
 */

import getDayOfTheMonth from "./getDayOfTheMonth";
import getDaysInMonth from "./getDaysInMonth";

interface DateAndCost {
    date: string,
    cost: number
}

export default function cumulative(series: DateAndCost[]) {
    const today = new Date();
    const daysInCurrentMonth = getDaysInMonth(today.getMonth(), today.getFullYear());
    if (series.length === 0) {
        // Array of form [{ day: 1, sum: 0 }...{ day: daysInCurrentMonth, sum: 0 }]
        return Array.from(Array(daysInCurrentMonth + 1).keys()).map(x => ({ day: x, sum: 0 })).slice(1);
    }

    const toReturn = [];
    let i = 0;
    let sum = 0;
    for (let day = 1; day <= daysInCurrentMonth; day++) {
        // Progress up the list of expenses, adding their cost to the sum if they're on or before this date
        while (i < series.length && getDayOfTheMonth(series[i].date) <= day) {
            sum = sum + series[i].cost;
            i++;
        }
        toReturn.push({ day, sum });
    }
    return toReturn;
}