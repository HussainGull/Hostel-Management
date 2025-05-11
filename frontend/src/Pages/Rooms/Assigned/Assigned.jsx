import DashboardLayout from "@/Compo/Layout/DashboardLayout.jsx";
import SearchBar from "@/Compo/Search/SearchBar.jsx";
import {ComboBox} from "@/Compo/Dropdown/ComboBox.jsx";
import AssignedOverview from "@/Pages/Rooms/Assigned/AssignedOverview.jsx";

export default function Assigned() {
    return (
        <DashboardLayout>
            <div className={'w-full p-4'}>
                <div className="flex flex-col gap-4">
                    <SearchBar/>
                    <div className="w-fit h-[60px] bg-black rounded-md flex items-center gap-[80px] p-4">
                        <div className={'w-fit gap-4 flex items-center justify-between'}>
                            <span className={'text-[18px] text-[#B0B0B0] font-extralight'}>Room Types</span>
                            <ComboBox/>
                        </div>
                        <div className={'w-fit gap-4 flex items-center justify-between'}>
                            <span className={'text-[18px] text-[#B0B0B0] font-extralight'}>Hostels</span>
                            <ComboBox/>
                        </div>
                        <div className={'w-fit gap-4 flex items-center justify-between'}>
                            <span className={'text-[18px] text-[#B0B0B0] font-extralight'}>Floors</span>
                            <ComboBox/>
                        </div>
                    </div>
                </div>
                <div className={'w-full mt-[42px] grid grid-cols-2 grid-rows-2  gap-y-[30px] gap-x-[35px]'}>
                    <AssignedOverview/>
                    <AssignedOverview/>
                    <AssignedOverview/>
                    <AssignedOverview/>
                </div>

            </div>
        </DashboardLayout>
    )
}