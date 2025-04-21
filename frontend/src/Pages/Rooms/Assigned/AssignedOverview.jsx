import MiniStatCard from "@/Compo/Charts/Rooms/Cards/MiniStatCard.jsx";
import DataCard from "@/Compo/Charts/Rooms/Cards/DataCard.jsx";
import LabelCard from "@/Compo/Charts/LabelCard/LabelCard.jsx";

export default function AssignedOverview(
) {
    return (
        <div className={'w-full bg-surface rounded-xl p-4'}>

            <div className={'w-fit flex items-center gap-7.5'}>

                <div className={'w-fit flex items-center justify-center gap-4'}>
                    <img src={'/src/assets/icons/bed.svg'} alt={'Bed Icon'} className={'w-9 h-9'}/>
                    <span className={'text-black text-[18px] font-semibold'}>6 Bedded Bunker</span>
                </div>

                <div className={'w-fit flex items-center justify-center gap-7'}>
                    <LabelCard
                        value={1}
                        label="Floor No."
                        width="w-fit"
                        height="35px"
                        bgColor="bg-black"
                        valueColor="text-white"
                        className="gap-2"
                    />
                    <MiniStatCard
                        imgSrc='/src/assets/icons/building.svg'
                        value={'H1'}
                    />
                </div>

            </div>

            <div className={'w-full'}>


            </div>

        </div>
    )
}