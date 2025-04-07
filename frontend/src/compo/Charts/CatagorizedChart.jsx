"use client"

import React from "react"
import {PieChart, Pie} from "recharts"
import {ExternalLink} from "lucide-react"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const chartData = [
    {name: "Collected", value: 5300000, fill: "#00FFF5"},
    {name: "Overdue", value: 1040000, fill: "#FF05C8"},
    {name: "Remaining", value: 1560000, fill: "#FFE605"},
]

export default function CatagorizedChart() {
    const total = chartData.reduce((sum, item) => sum + item.value, 0)
    const collected = chartData.find((item) => item.name === "Collected")?.value || 0
    const percentage = Math.round((collected / total) * 100)

    return (
        <Card
            className="w-[210px] h-auto flex flex-col gap-1 justify-start bg-transparent border-none text-white rounded-xl shadow-md p-4">
            {/* Header */}
            <CardHeader className="w-full p-2 gap-0">
                <CardTitle className="flex items-center gap-2 text-sm font-semibold">
                    <span className="truncate">Fees Collection</span>
                    <img
                        src="categorized-chart-icons/white.png"
                        alt="icon"
                        className="w-[12px] h-[12px] object-contain"
                    />
                </CardTitle>
            </CardHeader>

            {/* Donut Chart */}
            <CardContent className="flex justify-start items-center flex-grow relative mt-2 p-0">
                <div className="relative w-[170px] h-[170px]">
                    <PieChart width={170} height={170}>
                        <Pie
                            data={chartData}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            innerRadius={58}
                            outerRadius={78}
                            stroke="none"
                        />
                    </PieChart>
                    {/* Center text inside the chart */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <span className="text-white text-lg font-bold">{percentage}%</span>
                    </div>
                </div>
            </CardContent>


        </Card>
    );
}
