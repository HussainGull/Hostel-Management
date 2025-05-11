import AddButton from "@/Compo/Buttons/AddButton.jsx";
import DashboardLayout from "@/Compo/Layout/DashboardLayout.jsx";
import SearchBar from "@/Compo/Search/SearchBar.jsx";
import LabelCard from "@/Compo/LabelCard/LabelCard.jsx";
import HostelRevenueSummary from "@/Pages/Rooms/Hostels/HostelRevenueSummary.jsx";

export default function HostelRevenue () {
    return (
        <DashboardLayout>
            <div className="flex flex-col">
                <SearchBar/>
                <div className={'w-auto flex items-center gap-x-[19px] mt-4'}>
                    <LabelCard
                        value={5}
                        label={'Total Hostels'}
                        bgColor={'bg-black'}
                        valueColor={'text-white'}
                    />
                    <AddButton
                        label={'+Add Hostel'}
                        width={'190px'}
                        height={'60px'}
                        textColor={'text-white'}
                        bgColor={'bg-teal'}
                    />
                </div>
            </div>
            <div className={'w-full mt-4'}>
                <HostelRevenueSummary/>

            </div>

        </DashboardLayout>
    )
}