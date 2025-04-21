import React from "react";
import DashboardLayout from "@/Compo/Layout/DashboardLayout.jsx";
import SearchBar from "@/Compo/Search/SearchBar.jsx";
import HostelSummary from "@/Compo/Charts/Rooms/HostelSummary.jsx";
import {hostelData} from "@/Pages/Rooms/data.jsx";


export default function HostelsOccupancy() {

    return (
        <DashboardLayout>
            <SearchBar/>
            <div className={'w-full flex flex-col p-4 gap-y-5'}>
                {hostelData.map((hostel, index) => {
                    return <HostelSummary
                        key={index}
                        title={hostel.title}
                        chartData={hostel.chartData}
                        furnitureList={hostel.furnitureList}
                        RoomData={hostel.roomData}
                    />
                })}
            </div>

        </DashboardLayout>
    );
}