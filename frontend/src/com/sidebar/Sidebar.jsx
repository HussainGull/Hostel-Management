import React from 'react';

function SideBar() {
    const menuItems = [
        { icon: "analytics", label: "Analytics" },
        { icon: "students", label: "Students" },
        { icon: "complaints", label: "Complaints" },
        { icon: "stock", label: "Stock" },
        { icon: "users", label: "Users" },
        { icon: "meals", label: "Meals" },
    ];

    return (
        <div className="w-[298px] rounded-xl min-h-screen custom-gray flex flex-col items-center p-4">
            {menuItems.map((item, idx) => (
                <div key={idx} className="w-full flex items-center gap-3 p-3 hover:bg-gray-700 rounded-md cursor-pointer mb-2">
                    <img src={`/sidebar-icons/${item.icon}.png`} alt={item.label} className="w-[24px] h-[24px]" />
                    <h1 className="text-white text-[18px]">{item.label}</h1>
                </div>
            ))}
        </div>
    );
}

export default SideBar;
