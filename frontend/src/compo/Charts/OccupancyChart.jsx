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
} from "@/components/ui/card"
import {ChartContainer} from "@/components/ui/chart"

const chartData = [
    {browser: "Chrome", visitors: 90, fill: "var(--custom-cyan)"},
]

const chartConfig = {
    Chrome: {
        label: "Chrome",
        color: "hsl(210, 100%, 56%)",
    },
}

export default function OccupancyChart() {
    return (
        <Card className="w-[310px] h-[310px] flex flex-col custom-black border-none outline-none p-5 gap-0">
            <CardHeader className="w-auto flex items-center p-2">
                <CardTitle className={'text-white text-[18px] font-semibold cursor-pointer'}>Hostel 1</CardTitle>
                <img src={'/src/assets/collection-chart-icons/white.svg'}
                     alt={'Navigate Icon'}
                     className={'w-[12] h-[12]'}
                />
            </CardHeader>
            <CardContent className="w-[210px] h-[210px] flex pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                >
                    <RadialBarChart
                        data={chartData}
                        startAngle={0}
                        endAngle={250}
                        innerRadius={85}
                        outerRadius={140}
                        cursor='pointer'
                    >
                        <PolarGrid
                            gridType="circle"
                            radialLines={false}
                            stroke="none"
                            className="first:fill-[#292929] last:fill-background"
                            polarRadius={[96, 74]}
                        />
                        <RadialBar dataKey="visitors" background cornerRadius={10}/>

                        {/* Adding circle element */}
                        <circle
                            cx="50%"
                            cy="50%"
                            r="74"
                            fill="#111111"
                        />
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
                                                    className={`fill-white text-4xl font-bold cursor-pointer`}
                                                >
                                                    {chartData[0].visitors.toLocaleString()}
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </PolarRadiusAxis>
                    </RadialBarChart>
                </ChartContainer>
            </CardContent>

        </Card>
    )
}
