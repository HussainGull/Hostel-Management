import React from 'react';
import OccupancyChart from "@/compo/Charts/OccupancyChart.jsx";

export default function OccupancySummary() {
    return (
        <div className="w-auto h-[410px] custom-gray flex flex-col items-start rounded-[10px] justify-center">
            <div className={'w-[150px] h-[30px] flex justify-center items-center gap-1.5 p-2 mb-2.5'}>
                <label className={'text-[20px]  text-white'}>Occupancy</label>
                <img src={'/src/assets/collection-chart-icons/white.svg'} alt={'Navigation Icon'}
                     className={'w-[12px] h-[12px]'}/>
            </div>
            <div className={'w-full h-[330px] flex items-baseline-last justify-center gap-x-[20px] px-4'}>
                <OccupancyChart/>
                <OccupancyChart/>
                <OccupancyChart/>
            </div>
        </div>

    );
}
