"use client"

import React from "react"
import {PieChart, Pie, ResponsiveContainer} from "recharts"
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

export default function CollectionChart(
    {
        text,
        showImage=true

    }
) {

    const total = chartData.reduce((sum, item) => sum + item.value, 0)
    const collected = chartData.find((item) => item.name === "Collected")?.value || 0
    const percentage = Math.round((collected / total) * 100)

    return (
        <Card className="w-full max-w-[260px] aspect-[13/15] flex-shrink p-2 flex flex-col gap-0 justify-start bg-transparent border-none cursor-pointer shadow-none">

            {/* Header */}
            <CardHeader className="w-full p-2 gap-0">
                <CardTitle className="flex items-center gap-2 text-[clamp(14px,1.3vw,20px)] font-semibold">
                    <span className="truncate custom-text-black">{text}</span>
                    {showImage && (
                        <img
                            src={`/src/assets/navigate-icon/black-navi.svg`}
                            alt="icon"
                            className="w-3 h-3 object-contain"
                        />
                    )}
                </CardTitle>
            </CardHeader>

            {/* Donut Chart */}
            <CardContent className="flex justify-center items-center flex-grow relative p-0">
                <div className="relative w-full aspect-square">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={chartData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                cursor="pointer"
                                innerRadius="70%"
                                outerRadius="85%"
                                stroke="none"
                                className="outline-none focus:outline-none"
                            />
                        </PieChart>
                    </ResponsiveContainer>

                    {/* Center text */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span className="custom-text-black font-bold text-[clamp(20px,4vw,40px)]">
              {percentage}%
            </span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
