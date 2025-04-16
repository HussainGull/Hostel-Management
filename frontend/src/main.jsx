import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import Students from "@/Pages/Dashboard/Students/Students.jsx";
import Analytics from "@/Pages/Dashboard/Analytics/Analytics.jsx";
import DashboardLayout from "@/Compo/Layout/DashboardLayout.jsx";
import HostelSummary from "@/Compo/Charts/Rooms/HostelSummary.jsx";
import Search from "@/Compo/Search/SearchBar.jsx";
import RoomCards from "@/Compo/Charts/Rooms/RoomCards.jsx";
import HostelOverview from "@/Compo/Charts/Rooms/Cards/HostelOverview.jsx";
import HostelsOccupancySummary from "@/Pages/Rooms/Occupancy/HostelsOccupancySummary.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <HostelsOccupancySummary />
    </StrictMode>
)
