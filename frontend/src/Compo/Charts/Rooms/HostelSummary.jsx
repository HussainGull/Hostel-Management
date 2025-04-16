import DashboardLayout from "@/Compo/Layout/DashboardLayout.jsx";
import OccupancyChart from "@/Compo/Charts/Dashboard/OccupancyChart.jsx";
import RoomCards from "@/Compo/Charts/Rooms/RoomCards.jsx";
import FurnitureList from "@/Compo/DataTable/Furniture/FurnitureList.jsx";

export default function HostelSummary() {
    return (
            <div className={'w-full flex items-center justify-center gap-y-4'}>
                <div className={'w-full h-[340px] flex items-center justify-between gap-10 custom-gray rounded-xl'}>
                    <div className={'min-w-[310px] h-fit flex items-center justify-center'}>
                        <OccupancyChart title="Hostel 1"
                                        showImage={false}
                                        bgColor="bg-transparent"
                                        circleColor="transparent"
                                        textColor="text-black"
                                        className={'shadow-none text-black'}
                        />
                    </div>
                    <div className={'w-fit flex flex-col gap-5'}>
                        <RoomCards/>
                    </div>
                    <div className={'w-fit p-4'}>
                        <FurnitureList
                            title="Furniture"
                            iconPath="/src/assets/navigate-icon/white-navi.svg"
                            data={[
                                { name: "Ceiling Fan", quantity: 50 },
                                { name: "Center Table", quantity: 12 },
                                { name: "Chairs", quantity: 123 },
                                { name: "Refrigerator", quantity: 6 },
                                { name: "Kettle", quantity: 12 },
                            ]}
                        />

                    </div>
                </div>
            </div>
    )
}