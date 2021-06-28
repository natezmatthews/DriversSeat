import { useSelector } from "react-redux";
import { Label, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import prepareDataForChart from "../helpers/prepareDataForChart";
import { RootState } from "../redux/store";

export default function Chart() {
    /**
     * A graph of total spending for the current calendar month, plotting with Days on the x-axis
     * and Total Spending on the y-axis
     */

    const expenses = useSelector((state: RootState) => state.items);
    const data = prepareDataForChart(expenses);

    return (
        <ResponsiveContainer width='90%' height='90%'>
            <LineChart
                data={data}
                margin={{ top: 20, right: 20, left: 200, bottom: 20 }}
            >
                <YAxis dataKey="sum">
                    <Label value="Total spending" angle={-90} position="left" fill='gray'/>
                </YAxis>
                <XAxis dataKey="day">
                    <Label value="Days" position="bottom" fill='gray' />
                </XAxis>
                <Tooltip />
                <Line type="monotone" dataKey="sum" stroke="#ff7300" yAxisId={0} />
            </LineChart>
        </ResponsiveContainer>
    )
}