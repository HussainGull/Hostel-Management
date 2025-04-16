import React from "react";
import StudentsCards from "@/Pages/Dashboard/Students/compo/StudentsCards.jsx";
import AddStudent from "@/Compo/Buttons/AddStudent.jsx";
import RemoveStudent from "@/Compo/Buttons/RemoveStudent.jsx";
import DashboardLayout from "@/Compo/Layout/DashboardLayout.jsx";
import StudentsList from "@/Compo/DataTable/Students/StudentsList.jsx";
import {StudentsData} from '@/Pages/Dashboard/Students/AllStudents/StudentsData.jsx'
import {DefaultersData} from '@/Pages/Dashboard/Students/Defaulters/DefaultersData.jsx'
import DefaulterCard from "@/Pages/Dashboard/Students/Defaulters/DefaulterCard.jsx";
import StudentCard from "@/Pages/Dashboard/Students/AllStudents/StudentCard.jsx";


export default function Students() {

    const handleAddDefaulter = () => {
        // Add your logic here for adding a defaulter
        console.log("Adding a new defaulter student");
    };

    return (
        <DashboardLayout>
            <div className="w-full flex p-4 pt-0 gap-4 mt-[27px] justify-between">
                {/* Students Cards */}
                <div className="flex flex-wrap gap-5 w-[70%] max-h-[calc(80px*4+64px)] overflow-auto">
                    <StudentsCards/>
                </div>

                {/* Buttons aligned vertically */}
                <div className="w-[30%] p-4 flex flex-col items-center justify-center gap-4">
                    <AddStudent/>
                    <RemoveStudent/>
                </div>
            </div>

            <div className={'w-full flex '}>
                <div className="w-full h-screen flex p-4 pt-0">
                    <StudentsList
                        title="Students"
                        data={StudentsData}
                        renderStudentCard={StudentCard()}
                    />
                </div>

                <div className="w-full h-screen flex p-4 pt-0">
                    <StudentsList
                        title="Defaulter Students"
                        data={DefaultersData}
                        renderStudentCard={DefaulterCard()}
                        showAddButton={true}
                        addButtonText="+ Add Defaulter"
                        addButtonAction={handleAddDefaulter} // Add the handler function
                    />
                </div>
            </div>
        </DashboardLayout>
    );
}