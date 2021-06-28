import { sortBy } from "lodash";
import { DayAndCost, Expense } from "../sharedTypes";
import cumulative from "./cumulative";
import dateIsInCurrentMonthAndYear from "./dateIsInCurrentMonthAndYear";
import getDayOfTheMonth from "./getDayOfTheMonth";

export default function prepareData(expenses: Expense[]): { day: number, sum: number }[] {
    const fromThisMonth = expenses.filter(expense => dateIsInCurrentMonthAndYear(expense.date))
    const daysAndCosts = fromThisMonth.map((expense): DayAndCost =>  ({
      day: getDayOfTheMonth(expense.date),
      cost: expense.cost
    }));
    const sorted = sortBy(daysAndCosts, 'day');
    return cumulative(sorted);
}