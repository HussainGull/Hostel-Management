import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import CollectionSummaryChart from "@/compo/Charts/CollectionSummaryChart.jsx";
import ComplaintsChart from "@/compo/Charts/ComplaintsChart.jsx";
import ComplaintsSummaryChart from "@/compo/Charts/ComplaintsSummaryChart.jsx";
import OccupancyChart from "@/compo/Charts/OccupancyChart.jsx";
import CollectionChart from "@/compo/Charts/CollectionChart.jsx";
import Header from "@/compo/Header/Header.jsx";
import NavigationSidebar from "@/compo/NavigationSidebar/NavigationSidebar.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <NavigationSidebar/>
    </StrictMode>
)
