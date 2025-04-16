export default function TotalRooms({value}) {
    return (
        <div className={'custom-black w-[145px] h-[77px] flex flex-col items-start p-3 justify-center rounded-[10px] shadow-md'}>
            <label className={'text-[16px] text-white font-light'}>Total Rooms</label>
            <label className={'text-[20px] text-white font-semibold'}>{value}</label>
        </div>
    )
}