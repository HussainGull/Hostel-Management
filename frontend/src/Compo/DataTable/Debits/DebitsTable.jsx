"use client"

import React from "react"
import {MoreHorizontal, MoreVertical} from "lucide-react"

export default function DebitsTable() {
    const entries = Array(20).fill({
        name: "Ramakant Sharma",
        amount: "₹ 1,56,000",
    })

    return (
        <div className="w-full max-w-[640px] h-full bg-black rounded-xl p-4 flex flex-col gap-4 overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-3 text-white font-semibold text-[18px] px-1">
                <span>Debit History</span>
                <img src="/src/assets/navigate-icon/white-navi.svg" alt="expand" className="w-4 h-4" />
            </div>

            {/* Scrollable List */}
            <div className="flex flex-col gap-3 overflow-y-auto pr-2 h-full">
                {entries.map((entry, index) => (
                    <div
                        key={index}
                        className="w-full h-[60px] bg-subtle-blue rounded-lg px-4 py-3 flex items-center justify-between text-white"
                    >
                        <span className="text-base font-extralight">{entry.name}</span>
                        <div className="flex items-center gap-[65px]">
                            <span className="text-base text-red font-extralight">{entry.amount}</span>
                            <MoreVertical className="w-5 h-5 cursor-pointer text-white" />
                        </div>
                    </div>
                ))}
            </div>
        </div>


    )
}
