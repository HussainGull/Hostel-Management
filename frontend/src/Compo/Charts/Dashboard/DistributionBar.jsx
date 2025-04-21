"use client"

import React from "react"

export default function DistributionBar() {
    return (
        <div className="w-auto flex flex-col gap-y-3.5 mt-4">

            {/* Label */}
            <label className="text-[20px] font-md text-black">Distribution</label>

            {/* Segmented Bar */}
            <div className="w-full h-[20px] bg-transparent rounded-full overflow-hidden flex">
                <div className="bg-red h-full" style={{width: "30%"}}/>
                <div className="bg-violet h-full" style={{width: "5%"}}/>
                <div className="bg-mint h-full" style={{width: "15%"}}/>
                <div className="bg-yellow h-full" style={{width: "10%"}}/>
                <div className="bg-blue h-full" style={{width: "40%"}}/>
            </div>

        </div>
    )
}
