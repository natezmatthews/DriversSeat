import { Line, LineChart, Tooltip, XAxis } from "recharts";

const data2 = [
    { x: 1, y: 1 },
    { x: 2, y: 2 },
    { x: 3, y: 3 },
    { x: 4, y: 5 },
    { x: 5, y: 7 },
    { x: 6, y: 12 },
    { x: 7, y: 19 },
    { x: 8, y: 31 }
]

export default function D3() {
    return (
        <LineChart
            width={800}
            height={400}
            data={data2}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
            <XAxis dataKey="name" />
            <Tooltip />
            {/* <CartesianGrid stroke="#f5f5f5" /> */}
            <Line type="monotone" dataKey="y" stroke="#ff7300" yAxisId={0} />
        </LineChart>
    )
}