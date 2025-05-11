import DashboardLayout from "@/Compo/Layout/DashboardLayout.jsx";
import DebitsTable from "@/Compo/DataTable/Debits/DebitsTable.jsx";
import {DebitGraph} from "@/Compo/Debits/DebitGraph.jsx";
import RemoveStudent from "@/Compo/Buttons/RemoveStudent.jsx";

export default function AccountsDebit() {
    return (
        <DashboardLayout>

            <div className={'w-full p-4'}>
                <div className={'w-full bg-black rounded-xl'}>
                </div>
                <div className={'w-full flex gap-6 mt-[35px]'}>
                    <div className={'w-1/2 h-[600px] '}>
                        <DebitsTable/>
                    </div>
                    <div className={'w-1/2 space-y-[50px]'}>
                        <RemoveStudent
                            value={'Make Payout'}
                        />
                        <DebitGraph/>
                    </div>
                </div>

            </div>

        </DashboardLayout>

    )
}