import React from "react";
import CatagorizedChart from "@/compo/Charts/CatagorizedChart.jsx";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.jsx";
import {Pie, PieChart} from "recharts";

export default function SummaryChart() {
    return (
        <div
            className="custom-gray w-[1000px] h-[295px] rounded-[10px] px-8 py-2 flex items-center justify-between shadow-md">
            <div
                className="max-w-full w-[1000px] flex flex-col items-center"> {/* 🛠️ Added flex & items-center to align children */}
                {/*<CatagorizedChart/>*/}
                <div
                    className="max-w-full w-full flex flex-wrap gap-4 justify-center mt-4"> {/* 🛠️ Added flex-wrap and spacing */}
                    {
                        [
                            {icon: 'white', label: 'Expected', price: '₹ 52,000'},
                            {icon: 'yellow', label: 'Remaining', price: '₹ 15,60,000'},
                            {icon: 'cyan', label: 'Collected', price: '₹ 26,00,000'},
                            {icon: 'pink', label: 'Overdue', price: '₹ 10,40,000'},
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="custom-black w-[320px] h-[79px] rounded-[10px] px-6 py-2 flex items-center justify-between shadow-md"
                            >
                                <div className="flex flex-col">
                                    <span className="text-sm font-light text-white">{item.label}</span>
                                    <span className="text-xl font-bold text-white">{item.price}</span>
                                </div>
                                {/* 🛠️ Fixed icon path and syntax */}
                                <img
                                    src={`/summary-chart-icons/${item.icon}.png`} // 🛠️ Corrected the syntax from item.icon.png to item.icon + '.png'
                                    alt={`${item.label} Icon`}
                                    width={22}
                                    height={22}
                                    className="ml-4"
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );

}
