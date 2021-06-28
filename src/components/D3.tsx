import { useSelector } from "react-redux";
import { Label, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import prepareData from "../helpers/prepareData";
import { RootState } from "../redux/store";

export default function D3() {
    const expenses = useSelector((state: RootState) => state.items);
    const data = prepareData(expenses)

    return (
        <ResponsiveContainer width='90%' height='90%'>
            <LineChart
                data={data}
                margin={{ top: 20, right: 20, left: 200, bottom: 20 }}
            >
                <YAxis dataKey="sum">
                    <Label value="Total cumulative costs" angle={-90} position="left" />
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