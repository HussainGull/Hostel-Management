import OccupancySummary from "@/Pages/Dashboard/Analytics/compo/OccupancySummary.jsx";
import CollectionSummaryChart from "@/Compo/Charts/Dashboard/CollectionSummaryChart.jsx";
import ComplaintsSummaryChart from "@/Pages/Dashboard/Analytics/compo/ComplaintsSummaryChart.jsx";
import DashboardLayout from "@/Compo/Layout/DashboardLayout.jsx";

export default function Analytics() {
    return (

        <DashboardLayout>
            <div className="w-full flex p-4 pt-0">
                <div className="w-full gap-4 md:grid-cols-3">
                    <OccupancySummary/>
                </div>
                <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min"/>
            </div>

            <div className="w-full flex p-4 pt-0">
                <CollectionSummaryChart/>
            </div>

            <div className="w-full flex p-4 pt-0">
                <ComplaintsSummaryChart/>
            </div>
        </DashboardLayout>
    )
}
