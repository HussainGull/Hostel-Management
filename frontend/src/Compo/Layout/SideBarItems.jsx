// SideBarItems.jsx
import {
    BarChart2,
    GraduationCap,
    Frown,
    Package,
    Users,
    Utensils,
} from "lucide-react";

export const SideBarItems = [
    { label: "Analytics", icon: <BarChart2 className="text-cyan-400 w-5 h-5" /> },
    { label: "Students", icon: <GraduationCap className="w-5 h-5" /> },
    { label: "Complaints", icon: <Frown className="w-5 h-5" /> },
    { label: "Stock", icon: <Package className="w-5 h-5" /> },
    { label: "Users", icon: <Users className="w-5 h-5" /> },
    { label: "Meals", icon: <Utensils className="w-5 h-5" /> },
];
