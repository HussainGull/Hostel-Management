import SearchBar from "@/Compo/Search/SearchBar.jsx";
import DashboardLayout from "@/Compo/Layout/DashboardLayout.jsx";
import AddButton from "@/Compo/Buttons/AddButton.jsx";
import LabelCard from "@/Compo/LabelCard/LabelCard.jsx";
import DataCard from "@/Compo/Rooms/Cards/DataCard.jsx";
import {Button} from "@/components/ui/button.jsx";
import ExpenseLabelCard from "@/Compo/LabelCard/ExpenseLabelCard.jsx";
import CategoryCard from "@/Compo/Rooms/Cards/CategoryCard.jsx";
import FurnitureOrders from "@/Compo/DataTable/Furniture/FurnitureOrders.jsx";

export default function Furniture() {
    return (
        <DashboardLayout>

            <div className={'w-full'}>

                <div className={'w-fit flex justify-between gap-6'}>

                    <SearchBar/>

                    <AddButton
                        label="+Add Furniture"
                        width="185px"
                        height="70px"
                        bgColor="bg-teal"
                        textColor="text-white"
                        className=""
                    />

                    <LabelCard
                        value
                        showValue={false}
                        label="Report Damage"
                        width="185px"
                        height="70px"
                        bgColor="bg-red"
                        valueColor="text-white"

                    />
                </div>

                {/*Cards*/}
                <div className={'w-fit h-[305px] bg-surface mt-6 p-4 flex justify-start items-center gap-6 rounded-xl'}>

                    <div className={'w-fit flex flex-col items-center justify-center gap-4'}>

                        <div className={'w-fit grid grid-cols-2 gap-4'}>
                            <DataCard
                                width="180px"
                                height="80px"
                                value={4597}
                                label="Total"
                                bgColor="bg-black"
                                textColor="text-white"
                                valueTextSize="text-[24px]"
                                labelTextSize='text-[18px]'
                                bold={false}
                                className="p-4 gap-0"
                            />
                            <DataCard
                                width="180px"
                                height="80px"
                                value={'24,456'}
                                label="Utilized"
                                bgColor="bg-black"
                                textColor="text-cyan"
                                valueTextSize="text-[24px]"
                                labelTextSize='text-[18px]'
                                bold={false}
                                className="p-4 gap-0"
                            />
                            <DataCard
                                width="180px"
                                height="80px"
                                value={378}
                                label="Unutilized"
                                bgColor="bg-black"
                                textColor="text-yellow"
                                valueTextSize="text-[24px]"
                                labelTextSize='text-[18px]'
                                bold={false}
                                className="p-4 gap-0"
                            />
                            <DataCard
                                width="180px"
                                height="80px"
                                value={3743}
                                label="Damaged"
                                bgColor="bg-black"
                                textColor="text-pink"
                                valueTextSize="text-[24px]"
                                labelTextSize='text-[18px]'
                                bold={false}
                                className="p-4 gap-0"
                            />
                        </div>

                        <div className={'w-[375px] h-[60px] bg-black flex items-center justify-between rounded-xl p-4'}>
                            <label className={'text-[18px] font-extralight text-white'}>{`Categories:${56}`}</label>
                            <Button className="w-[155px] h-[40px] bg-transparent outline-none border-1 border-white">
                                View All
                            </Button>
                        </div>

                    </div>


                    <div
                        className={'w-485px h-[252px] bg-black rounded-xl flex flex-col justify-between items-center p-5 gap-2.5'}>

                        <div className={'w-full flex items-center justify center gap-[67px]'}>

                            <div className={'w-fit h-full flex flex-col items-start'}>
                                <label className={'text-[14px] text-white font-extralight'}>Expense Monitor</label>
                                <span className={'text-[14px] text-gray-dark mt-5'}>Total Expense</span>
                                <span className={'text-[20px] text-yellow mt-3.5'}>₹ 5,24,45,685</span>
                            </div>

                            <ExpenseLabelCard
                                label="Highest Expense"
                                item="Beds"
                                value='₹ 24, 45, 685'
                                valueColor={'text-pink'}
                            />

                        </div>

                        <div className={'w-full flex items-center justify center gap-[67px]'}>

                            <div className={'w-fit flex flex-col items-start gap-5'}>
                                <span className={'text-[14px] text-gray-dark'}>Unpaid Payments</span>
                                <span className={'text-[20px] text-red'}>₹ 5,24,45,685</span>
                            </div>

                            <ExpenseLabelCard
                                label="Lowest Expense"
                                item="Irons"
                                value='₹ 4,45,685'
                                valueColor={'text-cyan'}
                            />

                        </div>
                    </div>

                </div>

                <div className={'w-full flex gap-[20px] mt-6'}>

                    <div className={'w-1/2 bg-surface p-4 rounded-xl'}>

                        <div className={'w-full flex items-center justify-between'}>

                            <div className={'w-fit space-x-4'}>
                                <span className={'text-[20px] text-black'}>Categories</span>
                                <span className={'text-[20px] text-yellow'}>20</span>
                            </div>

                            <AddButton
                                label="+Add Category"
                                width="140px"
                                height="40px"
                                bgColor="bg-teal"
                                textColor="text-white"
                                className="rounded-sm"
                            />

                        </div>

                        <div className={'w-full grid grid-cols-3 grid-rows-auto gap-x-6 gap-y-5 co grid-x-6 mt-6'}>
                            <CategoryCard
                                label={'Bed'}
                                value={'56'}
                            /><CategoryCard
                            label={'Bed'}
                            value={56}
                        /><CategoryCard
                            label={'Bed'}
                            value={56}
                        /><CategoryCard
                            label={'Bed'}
                            value={56}
                        /><CategoryCard
                            label={'Bed'}
                            value={56}
                        /><CategoryCard
                            label={'Bed'}
                            value={56}
                        /><CategoryCard
                            label={'Bed'}
                            value={56}
                        /><CategoryCard
                            label={'Bed'}
                            value={56}
                        /><CategoryCard
                            label={'Bed'}
                            value={56}
                        /><CategoryCard
                            label={'Bed'}
                            value={56}
                        />
                        </div>

                    </div>

                    <div className={'w-1/2'}>
                        <FurnitureOrders/>
                    </div>


                </div>

            </div>

        </DashboardLayout>
    )
}