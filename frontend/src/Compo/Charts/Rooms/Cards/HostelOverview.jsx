import React from "react";
import {cn} from "@/lib/utils"; // Adjust the path if needed

export default function HostelOverview(
    {
        data = [],
        width = "381px",
        height = "77px",
        bgColor = "custom-black",
        className = "",
    }) {
    return (
        <div
            className={cn(
                "gap-1.5 p-1 flex items-center justify-evenly rounded-[10px] shadow-md",
                bgColor,
                className
            )}
            style={{width, height}}
        >
            {data.map((item, index) => (
                <div
                    key={index}
                    className="w-fit p-2 flex flex-col items-start justify-center hover:scale-105 transition-all cursor-pointer"

                >
                    <label className=" text-[16px] font-light text-white">
                        {item.label}
                    </label>
                    <span
                        className="text-[24px] font-light"
                        style={{color: item.color}}
                    >
            {item.value}
        </span>
                </div>
            ))
            }
        </div>
    )
        ;
}
