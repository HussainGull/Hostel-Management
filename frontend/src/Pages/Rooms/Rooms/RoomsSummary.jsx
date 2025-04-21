import DashboardLayout from "@/Compo/Layout/DashboardLayout.jsx";
import {Button} from "@/components/ui/button"
import SearchBar from "@/Compo/Search/SearchBar.jsx";
import LabelCard from "@/Compo/Charts/LabelCard/LabelCard.jsx";
import AddButton from "@/Compo/Buttons/AddButton.jsx";
import DataCard from "@/Compo/Charts/Rooms/Cards/DataCard.jsx";
import MiniStatCard from "@/Compo/Charts/Rooms/Cards/MiniStatCard.jsx";
import FurnitureList from "@/Compo/DataTable/Furniture/FurnitureList.jsx";
import MiniCollectionSummaryChart from "@/Compo/Charts/Dashboard/MiniCollectionSummaryChart.jsx";
import DistributionBar from "@/Compo/Charts/Dashboard/DistributionBar.jsx";

export default function RoomsSummary() {
    return (
        <DashboardLayout>
            <div className={'w-full p-4'}>
                <div className={'w-full flex flex-col items-start'}>
                    <SearchBar
                        className={'mb-4'}
                    />
                    <div className={'w-fit flex items-center justify-center  gap-7.5 mt-4'}>
                        <LabelCard
                            value={10}
                            label="Total Rooms"
                            width="210px"
                            height="60px"
                        />
                        <AddButton
                            label="+Add Rooms"
                            width="190px"
                            height="60px"
                            bgColor="bg-teal"
                        />
                    </div>
                    <div className={'w-fit flex items-center justify-between gap-6 mt-4'}>
                        <DataCard
                            width="210px"
                            height="120px"
                            value={385}
                            label="Occupied"
                            textColor="text-cyan"
                            labelTextSize='text-[18px]'
                            valueTextSize="text-[32px]"
                        />
                        <DataCard
                            width="210px"
                            height="120px"
                            value={30}
                            label="Vacant"
                            textColor="text-yellow"
                            labelTextSize='text-[18px]'
                            valueTextSize="text-[32px]"
                        />
                        <DataCard
                            width="210px"
                            height="120px"
                            value={94}
                            label="Types"
                            labelTextSize='text-[18px]'
                            valueTextSize="text-[32px]"
                        />
                        <DataCard
                            width="210px"
                            height="120px"
                            value={15}
                            label="Tenants"
                            labelTextSize='text-[18px]'
                            valueTextSize="text-[32px]"
                        />
                    </div>
                </div>

                <div className={'bg-surface w-full flex justify-between gap-5 p-4 mt-4 rounded-xl'}>

                    <div className={'w-full flex flex-col items-start'}>

                        {/*Main Bar*/}
                        <div className={'w-fit flex items-center gap-[178px]'}>
                            <div className={'w-full flex items-center gap-5'}>
                                <div className={'w-fit flex items-center justify-between gap-4'}>
                                    <img src={'/src/assets/icons/bed.svg'} alt={"Bed Icon"}
                                         className={'w-9 h-9 '}
                                    />
                                    <span className={'text-[18px] font-semibold text-black '}> 6 Bedded Bunker</span>
                                </div>
                                <Button variant="outline"
                                        className={'w-[84px] h-[34px] bg-surface text-black flex items-center justify-center'}>
                                    <img src={'/src/assets/icons/edit.svg'} alt={"Edit Icon"}
                                         className={'w-4 h-4'}/>
                                    Edit
                                </Button>
                            </div>
                            <div className={'w-fit flex items-center gap-4'}>
                                <MiniStatCard
                                    imgSrc={'/src/assets/icons/building.svg'}
                                    value={'H1'}
                                />
                                <MiniStatCard
                                    imgSrc={'/src/assets/icons/floors.svg'}
                                    value={'07'}
                                />
                                <MiniStatCard
                                    imgSrc={'/src/assets/icons/table.svg'}
                                    value={'07'}
                                />
                                <MiniStatCard
                                    imgSrc={'/src/assets/icons/users.svg'}
                                    value={'06'}
                                />
                            </div>

                        </div>

                        <div className={'w-full justify-between flex mt-8.5'}>

                            <div className={'w-[470px]  flex flex-col items-start justify-between'}>

                                <div className={'w-full h-fit flex flex-wrap gap-[20px]'}>
                                    <DataCard
                                        width="225px"
                                        height="80px"
                                        label="Total Rooms"
                                        value={125}
                                        bgColor="bg-black"
                                        textColor="text-white"
                                        valueTextSize="text-[24px]"
                                        labelTextSize='text-[16px]'
                                        bold={false}
                                        className="gap-0"
                                    />
                                    <DataCard
                                        width="225px"
                                        height="80px"
                                        label="Rent Per Tenant"
                                        value={'₹ 50,000'}
                                        bgColor="bg-black"
                                        textColor="text-white"
                                        valueTextSize="text-[24px]"
                                        labelTextSize='text-[16px]'
                                        bold={false}
                                        className="gap-0"
                                    />
                                    <DataCard
                                        width="225px"
                                        height="80px"
                                        label="Teanants"
                                        value={235}
                                        bgColor="bg-black"
                                        textColor="text-white"
                                        valueTextSize="text-[24px]"
                                        labelTextSize='text-[16px]'
                                        bold={false}
                                        className="gap-0"
                                    />
                                    <DataCard
                                        width="225px"
                                        height="80px"
                                        label="Furniture"
                                        value={125}
                                        bgColor="bg-black"
                                        textColor="text-white"
                                        valueTextSize="text-[24px]"
                                        labelTextSize='text-[16px]'
                                        bold={false}
                                        className="gap-0"
                                    />
                                </div>

                                <div className={'w-full'}>
                                    <DistributionBar/>
                                </div>

                            </div>

                            <MiniCollectionSummaryChart/>

                        </div>

                    </div>

                    {/*Furniture List*/}
                    <div className={'w-[270px] h-[340px]'}>
                        <FurnitureList
                            title="Furniture"
                            showIcon={true}
                            data={[
                                {name: "Table Fan", quantity: 50},
                                {name: "Chair", quantity: 70},
                                {name: "Bed", quantity: 20},
                                {name: "Hair Brush", quantity: 20},
                                {name: "Lamp", quantity: 20},
                                {name: "Study Table", quantity: 20},
                                {name: "Dinner", quantity: 20},
                                {name: "Bat", quantity: 20},
                                {name: "Football", quantity: 20}
                            ]}
                        />
                    </div>
                </div>
            </div>

        </DashboardLayout>
    )

}