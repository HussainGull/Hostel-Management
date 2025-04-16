import KitchenSummary from "@/Compo/Charts/Rooms/Cards/KitchenSummary.jsx";
import BedSummary from "@/Compo/Charts/Rooms/Cards/BedSummary.jsx";
import WashroomSummary from "@/Compo/Charts/Rooms/Cards/WashroomSummary.jsx";
import TotalRooms from "@/Compo/Charts/Rooms/Cards/TotalRooms.jsx";
import Occupied from "@/Compo/Charts/Rooms/Cards/Occupied.jsx";
import Floors from "@/Compo/Charts/Rooms/Cards/Floors.jsx";
import HostelOverview from "@/Compo/Charts/Rooms/Cards/HostelOverview.jsx";

export default function RoomCards({RoomData}) {
    const {
        bedValue,
        washroomValue,
        kitchenValue,
        totalRoomsValue,
        occupiedValue,
        floorsValue,
    } = RoomData;

    return (
        <div className={'bg-transparent w-fit gap-[15px] flex flex-col items-center rounded-[10px] p-4'}>
            <div className={'w-full flex items-center justify-between'}>
                <BedSummary
                    value={bedValue}
                    width="135px"
                    height="60px"
                    bgColor="custom-black"
                    className="hover:scale-105 transition"
                />
                <WashroomSummary
                    value={washroomValue}
                    width="120px"
                    height="60px"
                    bgColor="custom-black"
                    className="hover:scale-105 transition-all"
                />
                <KitchenSummary
                    value={kitchenValue}
                    width="105px"
                    height="60px"
                    bgColor="custom-black"
                    className="hover:scale-105 transition-all"
                />
            </div>
            <div className={'w-full flex items-center justify-between'}>
                <TotalRooms value={totalRoomsValue} bgColor="custom-black" width="145px"
                            className={"hover:scale-105 transition-all"}/>
                <Occupied value={occupiedValue} bgColor="custom-black" width={'110px'}
                          className={"hover:scale-105 transition-all"}/>
                <Floors value={floorsValue} bgColor="custom-black" width={'85px'}
                        className={"hover:scale-105 transition-all"}/>

            </div>
            <div className={'w-auto flex items-center justify-center'}>
                <HostelOverview
                    width="400px"
                    height="80px"
                    bgColor="custom-black"
                    data={RoomData.hostelOverview}
                />
            </div>
        </div>
    );
}