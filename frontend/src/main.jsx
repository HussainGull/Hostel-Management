import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import Assigned from "@/Pages/Rooms/Assigned/Assigned.jsx";
import HostelRevenue from "@/Pages/Rooms/Hostels/HostelRevenue.jsx";
import RoomsSummary from "@/Pages/Rooms/Rooms/RoomsSummary.jsx";
import AssignedOverview from "@/Pages/Rooms/Assigned/AssignedOverview.jsx";
import Furniture from "@/Pages/Rooms/Furniture/Furniture.jsx";
import AccountsDebit from "@/Pages/AccountsDebit/AccountsDebit.jsx";
import DebitHistory from "@/Pages/AccountsDebit/DebitHistory.jsx";
import {Vendors} from "@/Pages/AccountsDebit/Vendors.jsx";
import DashboardLayout from "@/Compo/Layout/DashboardLayout.jsx";
import Analytics from "@/Pages/Dashboard/Analytics/Analytics.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
            <Analytics/>
    </StrictMode>
)
