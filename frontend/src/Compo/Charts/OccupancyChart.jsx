"use client"

import {
    Label,
    PolarGrid,
    PolarRadiusAxis,
    RadialBar,
    RadialBarChart,
} from "recharts"

import {
    Card,
    CardContent, CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card.jsx"
import {ChartContainer} from "@/components/ui/chart.jsx"
import {cn} from "@/lib/utils.js"
import {Description} from "@headlessui/react"; // adjust path as needed

const chartData = [
    {browser: "Chrome", visitors: 90, fill: "var(--bg-cyan)"},
]

const chartConfig = {
    Chrome: {
        label: "Chrome",
        color: "hsl(210, 100%, 56%)",
    },
}

export default function OccupancyChart(
    {
        title = "Hostel 1",
        description = '',
        showDescription = true,
        className = "",
        circleColor = "#111111",
        chartData = []
    }) {
    const studentsCount = typeof chartData[0]?.students === "number" ? chartData[0].students : 0;
    const radius = Math.min(140, 85 + (studentsCount / 1.5));

    return (
        <Card
            className={cn("w-full max-w-[310px] h-fit flex flex-col justify-between border-none outline-none p-2 gap-0 bg-surface", className)}>
            {/* Header */}
            <CardHeader className={cn('w-full flex flex-col items-start p-2 justify-between')}>
                <CardTitle
                    className={cn("flex items-center gap-x-3 text-[18px] font-semibold cursor-pointer text-white")}
                >
                    {title}
                        <img
                            src={"/src/assets/navigate-icon/white-navi.svg"}
                            alt="Navigate Icon"
                            className="w-[12px] h-[12px]"
                        />
                </CardTitle>
                {showDescription && (
                    <CardDescription>{description}</CardDescription>
                )}
            </CardHeader>


            {/* Chart */}
            <CardContent className="w-full flex justify-center pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="aspect-square w-full max-w-[250px]"
                >
                    <RadialBarChart
                        data={chartData}
                        startAngle={0}
                        endAngle={250}
                        innerRadius={85}
                        outerRadius={140}
                        cursor="pointer"
                    >
                        <PolarGrid
                            gridType="circle"
                            radialLines={false}
                            stroke="none"
                            className="first:fill-[#B0B0B0] last:fill-background"
                            polarRadius={[96, 74]}
                        />
                        <RadialBar dataKey="students" background cornerRadius={10}
                        />

                        {/* Circle Background */}
                        <circle cx="50%" cy="50%" r="74" fill={circleColor}/>

                        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                            <Label
                                content={({viewBox}) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className={cn("text-4xl font-bold cursor-pointer", `fill-[#ffffff]`)}

                                                >
                                                    {studentsCount.toLocaleString()}%
                                                </tspan>
                                            </text>
                                        );
                                    }
                                }}
                            />
                        </PolarRadiusAxis>
                    </RadialBarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );

}