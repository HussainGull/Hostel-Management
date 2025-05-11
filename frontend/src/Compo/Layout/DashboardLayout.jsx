import {useState} from "react";
import Sidebar from "@/Compo/Layout/Sidebar.jsx";
import {SideBarItems} from "@/Compo/Layout/SideBarItems.jsx";
import {ChevronDown, ChevronUp} from "lucide-react";

export default function Header({children}) {
    const sidebarMap = {
        Dashboard: SideBarItems,
        // Add Rooms, Attendance etc. later here
    };

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [expandedSection, setExpandedSection] = useState(null);

    const navItems = [
        {label: "Dashboard", icon: "dashboard", active: true},
        {label: "Rooms", icon: "rooms"},
        {label: "Attendance", icon: "attendance"},
        {label: "Accounts", icon: "accounts"},
        {label: "Maintenance", icon: "maintenance"},
    ];

    const actionIcons = [
        {icon: "calendar"},
        {icon: "bell"},
        {icon: "profile"},
    ];

    return (
        <>
            <header className="relative bg-base h-[130px] flex items-center px-6">

                {/* Logo */}
                <div className="flex items-center gap-2 text-white font-semibold text-lg">
                    <div className="h-3 w-3 rounded-full bg-cyan-400"/>
                    HMS
                </div>

                {/* Desktop Nav */}
                <nav
                    className="absolute left-1/2 top-1/2 -translate-x-[calc(60%-40px)] -translate-y-1/2 gap-[40px] mt-[25px] hidden min-[1400px]:flex">
                    {navItems.map(({label, icon, active}) => (
                        <div
                            key={label}
                            className={`relative flex items-center justify-center gap-2 rounded-t-md 
                            transition-transform duration-200 hover:scale-[1.05] hover:cursor-pointer
                            ${
                                active
                                    ? "w-[225px] h-[80px] bg-transparent text-white font-medium"
                                    : "min-w-[120px] h-[60px] text-gray-400"
                            }`}
                        >
                            {active && (
                                <img
                                    src="/src/assets/dashboard-icons/active.svg"
                                    alt="active-background"
                                    className="absolute top-0 left-0 w-full h-full object-fill -z-10"
                                />
                            )}
                            <img
                                src={`/src/assets/dashboard-icons/${icon}.svg`}
                                alt={`${label} icon`}
                                className="w-5 h-5 z-10"
                            />
                            <span className="text-sm z-10">{label}</span>
                        </div>
                    ))}
                </nav>

                {/* Hamburger + Actions + Dropdown (mobile only) */}
                <div className="relative ml-auto flex items-center gap-4 max-[321px]:gap-2">
                    {/* Hamburger button */}
                    <button
                        onClick={() => setIsDropdownOpen((prev) => !prev)}
                        className="w-[60px] h-[60px] flex items-center justify-center block min-[1400px]:hidden max-[321px]:w-8 max-[321px]:h-8 p-2 rounded bg-[#2F2F2F] max-[768px]:w-[40px] max-[768px]:h-[40px]"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-10 h-10 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>

                    {/* Action Icons */}
                    {actionIcons.map(({icon}, idx) => (
                        <div
                            key={idx}
                            className="w-[60px] h-[60px] bg-[#2F2F2F] p-2
                            max-[768px]:w-[40px] max-[768px]:h-[40px]
                            max-[321px]:w-8 max-[321px]:h-8
                            rounded-full flex items-center justify-center text-white
                            hover:opacity-80 transition-transform duration-200 hover:scale-[1.05] hover:cursor-pointer"
                        >
                            <img
                                src={`/src/assets/dashboard-icons/${icon}.svg`}
                                className="w-8 h-8 max-[768px]:w-5 max-[768px]:h-5 max-[321px]:w-4 max-[321px]:h-4"
                            />
                        </div>
                    ))}

                    {/* Dropdown (mobile only) */}
                    {isDropdownOpen && (
                        <div
                            className="absolute top-full right-0 mt-2 w-[90vw] max-w-[400px] bg-surface shadow-lg z-50 px-4 py-4 rounded-md transition-all duration-300 ease-in-out origin-top block min-[1400px]:hidden">
                            {navItems.map(({label, icon, active}) => {
                                const isExpanded = expandedSection === label;
                                const hasChildren = !!sidebarMap[label];

                                return (
                                    <div
                                        key={label}
                                        className="transition-all duration-300 ease-in-out"
                                    >
                                        <div
                                            className={`flex items-center justify-between py-3 px-4 rounded-md hover:bg-[#2A2A2A] cursor-pointer transition-transform duration-200 hover:scale-[1.03]
                                            ${
                                                active
                                                    ? "text-white font-semibold"
                                                    : "text-gray-400"
                                            }`}
                                            onClick={() =>
                                                setExpandedSection((prev) =>
                                                    prev === label ? null : label
                                                )
                                            }
                                        >
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={`/src/assets/dashboard-icons/${icon}.svg`}
                                                    className="w-5 h-5"
                                                />
                                                <span className="text-sm">{label}</span>
                                            </div>
                                            {hasChildren &&
                                                (isExpanded ? (
                                                    <ChevronUp className="w-5 h-5"/>
                                                ) : (
                                                    <ChevronDown className="w-5 h-5"/>
                                                ))}
                                        </div>

                                        {/* Sidebar items (collapsed under nav item) */}
                                        <div
                                            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                                isExpanded
                                                    ? "max-h-[500px] opacity-100 translate-y-0"
                                                    : "max-h-0 opacity-0 -translate-y-2"
                                            }`}
                                        >
                                            <div className="pl-8 flex flex-col gap-2 mt-2">
                                                {hasChildren &&
                                                    sidebarMap[label].map(({label: childLabel, icon}) => (
                                                        <div
                                                            key={childLabel}
                                                            className="flex items-center gap-3 py-2 px-4 rounded-md hover:bg-[#2A2A2A] text-gray-400 hover:text-white cursor-pointer transition-transform duration-200 hover:scale-[1.03]"
                                                        >
                                                            {icon}
                                                            <span className="text-sm">{childLabel}</span>
                                                        </div>
                                                    ))}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </header>

            <main className="flex h-[calc(100vh-130px)] bg-surface">
                {/* Sidebar (desktop only) */}
                <aside className="w-[250px] bg-[#1E1E1E] m-4 max-[1400px]:hidden">
                    <Sidebar/>
                </aside>

                {/* Main content */}
                <section className="flex-1 overflow-auto">{children}</section>
            </main>
        </>
    );
}
