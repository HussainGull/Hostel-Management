import React from "react";

export default function HostelOverview() {
    return (
        <div
            className={'custom-black w-[381px] h-[77px] gap-1.5 p-1 flex items-center justify-between rounded-[10px] shadow-md'}>
            {
                [
                    {label: "Students", value: '1382', color: "#FFFFFF"},
                    {label: "In Hostel", value: '800', color: "var(--custom-cyan)"},
                    {label: "Outside Hostel", value: '200', color: "var(--custom-text-gray"},
                ].map((item) => (
                    <div className={'w-fit p-2 flex flex-col items-start justify-center'}>
                        <label className={'text-[16px] font-light text-white'}>{item.label}</label>
                        <span className="text-[24px] font-light" style={{color: item.color}}>{item.value}</span>
                    </div>
                ))
            }
        </div>
    )
}