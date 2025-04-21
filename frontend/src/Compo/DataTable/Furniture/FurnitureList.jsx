"use client";

import {ChevronRight} from "lucide-react";
import React from "react";

export default function FurnitureList(
    {
        title = "Furniture",
        showIcon = true,
        data = [],
        className = ""
    }) {
    return (
        <div
            className={`w-[250px] h-full rounded-xl bg-black p-4 flex flex-col gap-4 ${className}`}
        >
            {/* Title */}
            <div className="flex items-center gap-2 text-white text-[16px] font-light">
                <span>{title}</span>
                {showIcon && (
                    <img src={'/src/assets/navigate-icon/white-navi.svg'} alt="icon" className="w-[16px] h-[16px]"/>
                )}
            </div>

            {/* List Items */}
            <div className="w-full h-full flex flex-col gap-2 overflow-y-auto pr-1">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="bg-subtle-blue px-3 py-2 rounded-md flex items-center justify-between"
                    >
                        <span className="text-white text-[13px] font-normal">{item.name}</span>
                        <div className="flex items-center gap-1">
          <span className="text-white text-[13px] font-medium min-w-[20px] text-right">
            {item.quantity.toString().padStart(2, "0")}
          </span>
                            <ChevronRight size={14} color="#fff"/>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}
