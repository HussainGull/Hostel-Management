"use client"

import React from "react"
import {PieChart, Pie} from "recharts"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card.jsx"

const chartData = [
    {name: "Collected", value: 300000, fill: "#00FFF5"},
    {name: "Overdue", value: 1040000, fill: "#FF05C8"},
    {name: "Remaining", value: 1560000, fill: "#FFE605"},
]

export default function CollectionChart() {

    const total = chartData.reduce((sum, item) => sum + item.value, 0)
    const collected = chartData.find((item) => item.name === "Collected")?.value || 0
    const percentage = Math.round((collected / total) * 100)

    return (
        <Card
            className="w-[260px] h-[300px] p-2 flex flex-col gap-0 justify-start bg-transparent border-none cursor-pointer shadow-none">

            {/* Header */}

            <CardHeader className="w-full p-2 gap-0">
                <CardTitle className="flex items-center gap-2 text-[20px] font-semibold">
                    <span className="truncate custom-text-black">Fees Collection</span>
                    <img
                        src={`/src/assets/navigate-icon/black-navi.svg`} alt="icon"
                        className="w-[12px] h-[12px] object-contain"
                    />
                </CardTitle>
            </CardHeader>

            {/* Donut Chart */}

            <CardContent className="flex justify-start items-center flex-grow relative p-0 ">
                <div className="relative w-[240px] h-[240px]">
                    <PieChart width={240} height={240}>
                        <Pie
                            data={chartData}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            cursor='pointer'
                            innerRadius={85}
                            outerRadius={110}
                            stroke="none"
                            className="outline-none focus:outline-none"
                        />
                    </PieChart>
                    {/* Center text inside the chart */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <span className="custom-text-black text-[40px] font-bold">{percentage}%</span>
                    </div>
                </div>
            </CardContent>

        </Card>
    );
}
