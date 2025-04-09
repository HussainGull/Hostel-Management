import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import DashboardPage from "@/compo/Pages/Dashboard/DashboardPage.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <DashboardPage />
    </StrictMode>
)
