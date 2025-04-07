import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import SummaryChart from "@/compo/Charts/SummaryChart.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <SummaryChart/>
    </StrictMode>
)
