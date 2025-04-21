"use client"

import React from "react"
import {PieChart, Pie, ResponsiveContainer} from "recharts"

const chartData = [
    { name: "Collected", value: 300000, fill: "#00FFF5" },
    { name: "Overdue", value: 1040000, fill: "#FF05C8" },
    { name: "Remaining", value: 1560000, fill: "#FFE605" },
]

export default function MiniCollectionChart({ text = "Collection", showImage = true }) {
    const total = chartData.reduce((sum, item) => sum + item.value, 0)
    const collected = chartData.find((item) => item.name === "Collected")?.value || 0
    const percentage = Math.round((collected / total) * 100)

    return (
        <div className="w-[250px] h-[252px] bg-black rounded-xl flex flex-col items-center justify-start text-white p-2 relative">
            {/* Title */}
            <div className="w-full text-left text-xl font-semibold px-1">
                {text}
            </div>

            {/* Responsive Donut Chart */}
            <div className="relative w-full h-[220px] flex-grow aspect-square ">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={chartData}
                            dataKey="value"
                            cx="50%"
                            cy="50%"
                            innerRadius="65%"
                            outerRadius="85%"
                            stroke="none"
                            startAngle={90}
                            endAngle={-270}
                        />
                    </PieChart>
                </ResponsiveContainer>

                {/* Center text */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="text-white text-4xl font-bold">{percentage}%</span>
                </div>
            </div>
        </div>
    )
}
