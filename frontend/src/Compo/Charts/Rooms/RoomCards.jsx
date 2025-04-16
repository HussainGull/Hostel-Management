import KitchenSummary from "@/Compo/Charts/Rooms/Cards/KitchenSummary.jsx";
import BedSummary from "@/Compo/Charts/Rooms/Cards/BedSummary.jsx";
import WashroomSummary from "@/Compo/Charts/Rooms/Cards/WashroomSummary.jsx";
import TotalRooms from "@/Compo/Charts/Rooms/Cards/TotalRooms.jsx";
import Occupied from "@/Compo/Charts/Rooms/Cards/Occupied.jsx";
import Floors from "@/Compo/Charts/Rooms/Cards/Floors.jsx";
import HostelOverview from "@/Compo/Charts/Rooms/Cards/HostelOverview.jsx";

export default function RoomCards() {
    return (
        <div className={'bg-transparent w-fit gap-[15px] flex flex-col items-center rounded-[10px] p-4'}>
            <div className={'w-full flex items-center justify-between'}>
                <BedSummary value={150}/>
                <WashroomSummary value={200}/>
                <KitchenSummary value={300}/>
            </div>
            <div className={'w-full flex items-center justify-between'}>
                <TotalRooms value={40}/>
                <Occupied value={60}/>
                <Floors value={100}/>
            </div>
            <div className={'w-auto flex items-center justify-center'}>
                <HostelOverview/>
            </div>
        </div>
    );
}