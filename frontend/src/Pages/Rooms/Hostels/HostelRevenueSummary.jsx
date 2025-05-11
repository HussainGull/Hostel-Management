import AddButton from "@/Compo/Buttons/AddButton.jsx";
import OccupancyChart from "@/Compo/Charts/OccupancyChart.jsx";
import StatCard from "@/Compo/Rooms/Cards/StatCard.jsx";
import DataCard from "@/Compo/Rooms/Cards/DataCard.jsx";
import DataRow from "@/Compo/Rooms/Cards/DataRow.jsx";
import MiniCollectionChart from "@/Compo/Charts/MiniCollectionChart.jsx";
import FurnitureList from "@/Compo/DataTable/Furniture/FurnitureList.jsx";
import FundsOverview from "@/Compo/Rooms/Cards/FundsOverview.jsx";

export default function HostelRevenueSummary() {
    return (
        <div className="w-full flex items-center justify-center gap-5">
            <div className="w-full bg-surface p-5 rounded-xl">

                <div className={'w-full flex items-center justify-between gap-x-10'}>

                    {/*OccupancyChart*/}
                    <div className={'w-full lg:w-auto flex flex-col'}>
                        <OccupancyChart
                            title={'Hostel 1'}
                            showImage={true}
                            imageSrc={'/src/assets/navigate-icon/black-navi.svg'}
                            showDescription={true}
                            description={'Hostel 1 is a spacious and well-equipped hostel located in the heart of the campus.'}
                            bgColor={"bg-transparent"}
                            textColor={"text-black"}
                            chartData={[{students: 150, maxStudents: 300, fill: "#00B8AE"}]}

                        />
                        <AddButton
                            label={'+Add Room'}
                            width={'240px'}
                            height={'45px'}
                            bgColor={'bg-teal'}
                            textColor={'text-white'}
                        />
                    </div>

                    <div className={'w-full h-full lg:w-auto flex flex-col items-center gap-y-7'}>

                        <div className={'w-full flex items-center justify-between '}>

                            {/*RoomCards*/}
                            <div className={'w-fit h-full flex flex-col items-center justify-center gap-4'}>
                                <div className={'w-full flex items-center justify-center gap-5'}>
                                    <StatCard
                                        width="135px"
                                        height='60px'
                                        value={60}
                                        Imgsrc={'/src/assets/room-card-icons/bed.svg'}
                                    />
                                    <StatCard
                                        width="100px"
                                        height='60px'
                                        value={54}
                                        Imgsrc={'/src/assets/room-card-icons/washroom.svg'}
                                    />
                                    <StatCard
                                        width="100px"
                                        height='60px'
                                        value={60}
                                        Imgsrc={'/src/assets/room-card-icons/kitchen.svg'}
                                    />
                                </div>
                                <div className={'w-full h-fit flex items-center justify-center gap-5'}>
                                    <DataCard
                                        width="135px"
                                        height="80px"
                                        value={50}
                                        label="Total Rooms"
                                        textColor="text-white"
                                    />
                                    <DataCard
                                        width="110px"
                                        height="80px"
                                        value={50}
                                        label="Occupied"
                                        textColor="text-yellow"
                                    />
                                    <DataCard
                                        width="90px"
                                        height="80px"
                                        value={50}
                                        label="Floors"
                                        textColor="text-white"
                                    />
                                </div>
                                <div className={'w-full h-fit flex items-center justify-center'}>
                                    <DataRow
                                        data={[
                                            {label: "Students", value: "1382", textColorClass: "text-white"},
                                            {label: "In Hostel", value: "578", textColorClass: "text-cyan"},
                                            {label: "Students", value: "360", textColorClass: "text-gray-dark"},
                                        ]}
                                    />
                                </div>
                            </div>

                            {/*Collection Chart*/}

                            <MiniCollectionChart
                                text={'Collection'}
                                showImage={false}
                            />

                            {/* Furniture List   */}

                            <div className={'h-[252px]'}>
                                <FurnitureList
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

                        <div className={'w-full'}>
                            <FundsOverview
                                data={[
                                    {label: "Expected", fund: '₹15,65,852', textColorClass: "text-white"},
                                    {label: "Collected", fund: '₹3,91,463', textColorClass: "text-cyan"},
                                    {label: "Remaining", fund: '₹7,51,6082', textColorClass: "text-yellow"},
                                    {label: "Overdue", fund: '₹4,85,414.122', textColorClass: "text-pink"},
                                ]}
                            />
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )

}