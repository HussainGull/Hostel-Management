"use client"

import React, {useState} from "react";
import {
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable,
} from "@tanstack/react-table";

import {Input} from "@/components/ui/input.jsx";
import {Button} from "@/components/ui/button.jsx";
import {Table, TableBody, TableCell, TableRow} from "@/components/ui/table.jsx";
import {Search} from "lucide-react";


export default function StudentsList({
                                        title = "Students List",
                                        data = [],
                                        renderStudentCard,
                                        showAddButton = false,
                                        addButtonText = "+ Add",
                                        addButtonAction = () => {
                                        },
                                        iconPath = "/src/assets/navigate-icon/black-navi.svg",
                                        searchPlaceholder = "Search ...",
                                        emptyListMessage = "No students found.",
                                        customWrapperClassName = "",
                                    }) {
    const [filterInput, setFilterInput] = useState("");
    const [triggerSearch, setTriggerSearch] = useState("");

    const columns = [
        {
            accessorKey: "name",
            cell: ({row}) => renderStudentCard(row)
        }
    ];

    const table = useReactTable({
        data,
        columns,
        state: {
            globalFilter: triggerSearch,
        },
        onGlobalFilterChange: setTriggerSearch,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        globalFilterFn: (row, columnId, filterValue) => {
            return row.getValue(columnId).toLowerCase().includes(filterValue.toLowerCase());
        },
    });

    const handleSearchKey = () => {
            setTriggerSearch(filterInput);

    };

    return (
        <div className={`w-full p-4 custom-gray rounded-lg flex flex-col gap-0 ${customWrapperClassName}`}>
            <div className="w-auto p-2 space-y-[18px]">
                {/* Header */}
                <div className="flex items-center gap-1">
                    <span className="text-[16px] font-medium text-black">{title}</span>
                    {iconPath && (
                        <img
                            src={iconPath}
                            alt="Navi Icon"
                            className="w-[16px] h-[16px]"
                        />
                    )}
                </div>

                {/* Search + Button */}
                <div className="w-auto h-[48px] flex items-center justify-between">
                    <div className="h-[48px] flex items-center gap-2 bg-[#2d2d2d] px-4 py-2 rounded-md">
                        <Search className="w-5 h-5" color="#B0B0B0"/>
                        <Input
                            placeholder={searchPlaceholder}
                            className="bg-transparent border-none text-white placeholder-[#B0B0B0] focus-visible:ring-0 focus-visible:ring-offset-0 w-[200px]"
                            value={filterInput}
                            onChange={(e) => setFilterInput(e.target.value)}
                            onKeyDown={handleSearchKey}
                        />
                    </div>
                    {showAddButton && (
                        <Button
                            onClick={addButtonAction}
                            className="h-[48px] px-4 border-[#00FFF5] text-[#00FFF5] hover:bg-cyan-400 hover:text-black hover:shadow-md">
                            {addButtonText}
                        </Button>
                    )}
                </div>
            </div>

            {/* Content area (Scrollable table + Pagination stays below) */}
            <div className="flex flex-col w-full flex-grow min-h-0">
                {/* Students Table List */}
                <div className="w-full flex-grow overflow-y-auto min-h-0">
                    <Table className="w-full">
                        <TableBody>
                            {table.getRowModel().rows.length ? (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow key={row.id} className="border-none">
                                        <TableCell className="p-2">
                                            {columns[0].cell({row})}
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow className="flex items-center">
                                    <TableCell className="text-center text-[20px] text-[#F10606] py-4">
                                        {emptyListMessage}
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>

                {/* Pagination - always inside gray div */}
                <div className="flex flex-wrap items-center justify-between gap-4 w-full p-2 border-t mt-2">
                    <div className="text-md text-black">
                        Viewing {table.getPaginationRowModel().rows.length > 0
                        ? `${table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1}–${table.getState().pagination.pageIndex * table.getState().pagination.pageSize + table.getPaginationRowModel().rows.length}`
                        : 0} of {table.getFilteredRowModel().rows.length} rows
                    </div>
                    <div className="space-x-2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                        >
                            Previous
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                        >
                            Next
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}