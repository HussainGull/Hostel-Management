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
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card.jsx"
import {ChartContainer} from "@/components/ui/chart.jsx"
import {cn} from "@/lib/utils" // adjust path as needed

const chartData = [
    {browser: "Chrome", visitors: 90, fill: "var(--custom-cyan)"},
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
        showImage = true,
        imageSrc = "/src/assets/navigate-icon/white-navi.svg",
        bgColor = "custom-gray",
        className = "",
        circleColor = "#111111",
        textColor = "white",
        chartData = []
    }) {
    const studentsCount = typeof chartData[0]?.students === "number" ? chartData[0].students : 0;
    const radius = Math.min(140, 85 + (studentsCount / 1.5));

    return (
        <Card
            className={cn("w-full max-w-[310px] h-fit flex flex-col border-none outline-none p-2 gap-0", bgColor, className)}>
            {/* Header */}
            <CardHeader className={cn('w-full flex items-center p-2 justify-between')}>
                <CardTitle
                    className={cn("text-[18px] font-semibold cursor-pointer")}
                    style={{color: textColor}}
                >
                    {title}

                    {showImage && (
                        <img
                            src={imageSrc}
                            alt="Navigate Icon"
                            className="w-[12px] h-[12px]"
                        />
                    )}
                </CardTitle>
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
                                                    className={cn("text-4xl font-bold cursor-pointer", `fill-[${textColor}]`)}

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
