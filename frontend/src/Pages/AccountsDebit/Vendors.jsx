import DashboardLayout from "@/Compo/Layout/DashboardLayout.jsx";
import AddButton from "@/Compo/Buttons/AddButton.jsx";

export function Vendors() {
    return (
        <DashboardLayout>
            <div className={'w-full p-4'}>
                <div className={'flex justify-between items-center w-full'}>
                    <div className={"w-auto flex flex-col justify-start space-y-4.5"}>
                        <span className={'text-[32px] font-light'}>Vendors</span>
                        <span className="text-[16px] font-light">
                          Showing total <span className="text-yellow font-medium">985</span> Vendors
                        </span>
                    </div>
                    <AddButton
                        label={'+Add Hostel'}
                        width={'190px'}
                        height={'50px'}
                        textColor={'text-white'}
                        bgColor={'bg-teal'}
                    />
                </div>
                <div className={'w-[900px] h-[85px] bg-surface mb-6 rounded flex items-center p-4 mt-[60px]'}>
                    <span className={'text-[16px]  text-black'}>Aloo Pagal Furniture Wala</span>
                    <span className={'text-[16px] text-black ml-[150px]'}>₹ 56,852</span>
                </div>
            </div>

        </DashboardLayout>
    )
}