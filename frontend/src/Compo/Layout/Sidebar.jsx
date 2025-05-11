import {SideBarItems} from "@/Compo/Layout/SideBarItems.jsx";


export default function Sidebar() {
    return (
        <aside className="w-full h-full bg-base text-white rounded-[10px] shadow-md z-50">
            <nav className="flex flex-col gap-2">
                {SideBarItems.map((item, index) => (
                    <a
                        key={index}
                        href="#"
                        className={`w-full h-[70px] flex items-center gap-3 px-6 py-3 rounded-[10px] transition-all duration-200 transform
              ${item.active
                            ? "bg-[#2b2b2b] text-white font-medium"
                            : "text-gray-300 hover:bg-[#2E2E2E] hover:scale-[1.02] cursor-pointer"}`}
                    >
                        {item.icon}
                        <span className="text-[18px]">{item.label}</span>
                    </a>
                ))}
            </nav>
        </aside>
    )
}

