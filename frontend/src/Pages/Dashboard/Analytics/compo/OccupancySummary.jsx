import React from 'react';
import OccupancyChart from "@/Compo/Charts/Dashboard/OccupancyChart.jsx";

export default function OccupancySummary() {
    return (
        <div className="w-full h-auto custom-gray flex flex-col items-start rounded-[10px] justify-center p-4">
            {/* Title and Icon */}
            <div className="w-[200px] h-auto flex items-center p-4 mb-1">
                <label className='text-[20px] font-semibold custom-text-black'>Occupancy</label>
                <img
                    src="/src/assets/navigate-icon/black-navi.svg"
                    alt="Navigation Icon"
                    className="w-[12px] h-[12px] ml-[10px]"
                />
            </div>

            {/* HostelsOccupancySummary Charts */}
            <div className="w-full flex flex-wrap justify-center gap-4 px-2 py-4">
                {[...Array(3)].map((_, index) => (
                    <div
                        key={index}
                        className="flex-grow flex-shrink-0 w-full sm:w-[48%] md:w-[32%] xl:w-[30%] max-w-[400px] flex items-center justify-center"
                    >
                        <OccupancyChart />
                    </div>
                ))}
            </div>
        </div>
    );
}
