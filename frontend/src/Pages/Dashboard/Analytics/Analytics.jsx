import DashboardLayout from "@/Compo/Layout/DashboardLayout.jsx";
import OccupancyChart from "@/Compo/Charts/OccupancyChart.jsx";
import React from "react";
import CollectionChart from "@/Compo/Charts/CollectionChart.jsx";
import ComplaintsChart from "@/Compo/Charts/ComplaintsChart.jsx";

export default function Analytics() {
    return (
        <DashboardLayout>

            {/* HostelsOccupancy Charts */}
            <div className="w-full gap-4 md:grid-cols-3 flex-1 shrink p-4">
                <div className="w-full h-auto bg-base flex flex-col items-start rounded-[10px] justify-center p-2">
                    {/* Title and Icon */}
                    <div className="w-[200px] h-auto flex items-center p-4 mb-1">
                        <label className='text-[20px] font-semibold text-white'>Occupancy</label>
                    </div>

                    {/* HostelsOccupancy Charts */}
                    <div className="w-full flex flex-wrap justify-center gap-4 px-2 py-4">
                        {[...Array(3)].map((_, index) => (
                            <div
                                key={index}
                                className="flex-grow flex-shrink-0 w-full sm:w-[48%] md:w-[32%] xl:w-[30%] max-w-[400px] flex items-center justify-center"
                            >
                                <OccupancyChart/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full flex p-4 pt-0 mt-5">
                <div
                    className="bg-base w-full h-[320px] p-4 rounded-[10px] flex items-center justify-between">

                    {/*<Categorized Chart/>*/}

                    <CollectionChart
                        text={'Fees Collection'}

                    />

                    {/*<Fee Data Divs/>*/}
                    <div
                        className=" w-full flex flex-wrap gap-5 justify-center mt-4 p-4">
                        {
                            [
                                {icon: 'white', label: 'Expected', color: '#FFFFFF', price: '₹ 52,000'},
                                {icon: 'yellow', label: 'Remaining', color: '#FFE605', price: '₹ 15,60,000'},
                                {icon: 'cyan', label: 'Collected', color: '#00FFF5', price: '₹ 26,00,000'},
                                {icon: 'red', label: 'Overdue', color: '#FF05C8', price: '₹ 10,40,000'},
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-surface w-[320px] h-[79px] rounded-[10px] px-6 py-2 flex items-center justify-between shadow-md mr-5 cursor-pointer"
                                >
                                    <div className="flex flex-col">
                                        <span className="text-sm font-light text-white">{item.label}</span>
                                        <span className="text-[24px] font-light"
                                              style={{color: item.color}}>{item.price}</span>
                                    </div>

                                    <img
                                        src={`/src/assets/collection-summary-icons/${item.icon}.svg`}
                                        alt={`${item.label} Icon`}
                                        width={22}
                                        height={22}
                                        className=" ml-4"
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="w-full flex p-4 pt-0 mt-5">
                <div
                    className="bg-base w-full h-[175px] rounded-[10px] p-4 flex items-baseline justify-center shadow-md">

                    <div className="max-w-full w-full flex gap-[65px] items-end p-2">

                        {/*<Complaints Chart/>*/}

                        <ComplaintsChart/>

                        {/*<Fee Data Divs/>*/}

                        {
                            [
                                {icon: 'white-navi', label: 'Total Complaints', color: '#FFFFFF', amount: '158'},
                                {icon: 'white-navi', label: 'Resolved', color: '#00FFF5', amount: '96'},
                                {icon: 'white-navi', label: 'Open', color: '#FFE605', amount: '57'},
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-surface w-[223px] h-[79px] rounded-[10px] px-6 py-2 flex items-center justify-between shadow-md cursor-pointer"
                                >
                                    <div className="flex flex-col justify-start">
                                        <div className={'w-auto flex items-center '}>
                                            <span className="text-[16px] font-light text-white">{item.label}</span>
                                            <img
                                                src={`/src/assets/navigate-icon/${item.icon}.svg`}
                                                alt={`${item.label} Icon`}
                                                width={16}
                                                height={16}
                                                className="m-[8px]"
                                            />
                                        </div>
                                        <span className="text-xl font-light"
                                              style={{color: item.color}}>{item.amount}</span>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </DashboardLayout>
    )
}
