import React from 'react';
import '../../index.css';

function Home() {
    return (
        <>
            {/* Header BG */}
            <div className="custom-gray p-4 w-full h-auto flex justify-center">
                <div className="p-4 w-full flex flex-col lg:flex-row items-center justify-between">

                    {/* Name Section */}
                    <h1 className="custom-white text-[24px] lg:mr-[60px] mb-4 lg:mb-0">HG</h1>

                    {/* Options Section */}
                    <div className="p-2 w-full flex flex-wrap justify-center gap-x-10 gap-y-4 lg:gap-y-0 lg:flex-nowrap lg:w-auto lg:mt-[30px]">
                        {[
                            { icon: "dashboard", label: "Dashboard" },
                            { icon: "rooms", label: "Rooms" },
                            { icon: "attendance", label: "Attendance" },
                            { icon: "accounts", label: "Accounts" },
                            { icon: "maintenance", label: "Maintenance" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center">
                                <img
                                    src={`../../public/dashboard-icons/${item.icon}.png`}
                                    alt={`${item.label} Icon`}
                                    className="w-[24px] h-[24px]"
                                />
                                <h1 className="custom-light-brown text-[18px] ml-[10px]">{item.label}</h1>
                            </div>
                        ))}
                    </div>

                    {/* Settings Section */}
                    <div className="flex justify-center items-center gap-4 mt-4 lg:mt-0">
                        {["calendar", "bell", "profile"].map((icon, idx) => (
                            <div key={idx} className="w-[50px] h-[50px] lg:w-[62px] lg:h-[62px] rounded-full bg-[#2F2F2F] flex justify-center items-center">
                                <img src={`../../public/dashboard-icons/${icon}.png`} alt={`${icon} Icon`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;