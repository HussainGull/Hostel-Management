import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import Assigned from "@/Pages/Rooms/Assigned/Assigned.jsx";
import HostelRevenue from "@/Pages/Rooms/Hostels/HostelRevenue.jsx";
import RoomsSummary from "@/Pages/Rooms/Rooms/RoomsSummary.jsx";
import AssignedOverview from "@/Pages/Rooms/Assigned/AssignedOverview.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
            <Assigned/>
    </StrictMode>
)
