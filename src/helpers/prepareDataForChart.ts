import dateIsInCurrentMonthAndYear from "../dateHelpers/dateIsInCurrentMonthAndYear";
import getDayOfTheMonth from "../dateHelpers/getDayOfTheMonth";
import { DayAndCost, Expense } from "../sharedTypes";
import cumulativeSpending from "./cumulativeSpending";

export default function prepareDataForChart(expenses: Expense[]): { day: number, sum: number }[] {
    const fromThisMonth = expenses.filter(expense => dateIsInCurrentMonthAndYear(expense.date))
    const daysAndCosts = fromThisMonth.map((expense): DayAndCost =>  ({
      day: getDayOfTheMonth(expense.date),
      cost: expense.cost
    }));
    return cumulativeSpending(daysAndCosts);
}