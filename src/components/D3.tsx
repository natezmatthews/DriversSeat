import { sortBy } from "lodash";
import { useSelector } from "react-redux";
import { Label, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import cumulative from "../helpers/cumulative";
import getDayOfTheMonth from "../helpers/getDayOfTheMonth";
import { RootState } from "../redux/store";
import { DayAndCost } from "../sharedTypes";

export default function D3() {
    const expenses = useSelector((state: RootState) => state.items);
    const daysAndCosts = expenses.map((expense): DayAndCost =>  ({
      day: getDayOfTheMonth(expense.date),
      cost: expense.cost
    }));
    const sorted = sortBy(daysAndCosts, 'day');
    const data = cumulative(sorted);

    return (
        <ResponsiveContainer width='90%' height='90%'>
            <LineChart
                data={data}
                margin={{ top: 20, right: 20, left: 200, bottom: 20 }}
            >
                <YAxis dataKey="sum">
                    <Label value="Total cumulative costs" position="left" />
                </YAxis>
                <XAxis dataKey="day">
                    <Label value="Day of the month" position="bottom" />
                </XAxis>
                <Tooltip />
                <Line type="monotone" dataKey="sum" stroke="#ff7300" yAxisId={0} />
            </LineChart>
        </ResponsiveContainer>
    )
}