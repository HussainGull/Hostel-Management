import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {HostelGraph} from "@/com/hostelGraphs/HostelGraph.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <HostelGraph/>
    </StrictMode>
)
