import OccupancyChart from "@/Compo/Charts/Dashboard/OccupancyChart.jsx";
import RoomCards from "@/Compo/Charts/Rooms/RoomCards.jsx";
import FurnitureList from "@/Compo/DataTable/Furniture/FurnitureList.jsx";

export default function HostelSummary(
    {
        title,
        chartData,
        furnitureList,
        RoomData,
    }
) {
    return (
        <div className={'w-full flex items-center justify-around gap-y-4 p-4 custom-gray rounded-xl'}>
                <div className={'min-w-[310px] h-fit flex items-center justify-center'}>
                    <OccupancyChart title={title}
                                    showImage={false}
                                    bgColor="bg-transparent"
                                    circleColor="transparent"
                                    textColor="text-black"
                                    className={'shadow-none text-black'}
                                    chartData={
                                        chartData
                                    }
                    />
                </div>
                <div className={'w-fit flex items-start'}>
                    <div className={'w-fit flex flex-col gap-5'}>
                        <RoomCards RoomData={RoomData}/>
                    </div>
                    <div className={'w-fit p-4'}>
                        <FurnitureList
                            title="Furniture"
                            iconPath="/src/assets/navigate-icon/white-navi.svg"
                            data={furnitureList}
                        />

                    </div>
                </div>
        </div>
    )
}