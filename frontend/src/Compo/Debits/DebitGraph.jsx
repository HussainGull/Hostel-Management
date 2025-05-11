"use client"

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.jsx"

const chartData = [
    { month: "Mar", value: 240 },
    { month: "Apr", value: 900 },
    { month: "May", value: 1180 },
    { month: "Jun", value: 1750 },
    { month: "Jul", value: 30 },
    { month: "Aug", value: 510 },
]

export function DebitGraph() {
    return (
        <Card className="h-[479px] bg-black text-white">
            <CardHeader>
                <CardTitle className={'text-xl'}>Debit Graph</CardTitle>
            </CardHeader>
            <CardContent>
                <AreaChart
                    width={500}
                    height={380}
                    data={chartData}
                    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                >
                    <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="transparent" />
                    <XAxis
                        dataKey="month"
                        tickLine={false}
                        axisLine={false}
                        tick={{
                            fill: "#a1a1aa",
                            fontSize: 12,
                            textAnchor: "center",
                            dx: -50,
                        }}
                    />
                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#4ade80"
                        fill="#4ade80"
                        fillOpacity={0.3}
                        strokeWidth={2}
                    />
                </AreaChart>
            </CardContent>
        </Card>

    )
}
