import React from "react";
import DashboardLayout from "@/Compo/Layout/DashboardLayout.jsx";
import SearchBar from "@/Compo/Search/SearchBar.jsx";
import HostelSummary from "@/Compo/Charts/Rooms/HostelSummary.jsx";


export default function HostelsOccupancySummary() {

    return (
        <DashboardLayout>
                <SearchBar />
                <div className={'w-full flex flex-col p-4 gap-y-5'}>
                    <HostelSummary/>
                    <HostelSummary/>
                    <HostelSummary/>
                </div>

        </DashboardLayout>
    );
}