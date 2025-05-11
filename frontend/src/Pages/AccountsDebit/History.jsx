"use client"

import * as React from "react"
import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import {MoreHorizontal, Download} from "lucide-react"

import {Button} from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const data = [
    {
        name: "Ramakant Sharma",
        amount: "1,56,000",
        date: "12 Feb 2023",
        remark: "Salary",
        contact: "+91 52345 64545",
    },
    {
        name: "Ramakant Sharma",
        amount: "1,56,000",
        date: "12 Feb 2023",
        remark: "Order Payment",
        contact: "+91 52345 64545",
    },
    {
        name: "Ramakant Sharma",
        amount: "1,56,000",
        date: "12 Feb 2023",
        remark: "Salary",
        contact: "+91 52345 64545",
    },
    {
        name: "Ramakant Sharma",
        amount: "1,56,000",
        date: "12 Feb 2023",
        remark: "Order Payment",
        contact: "+91 52345 64545",
    },
    {
        name: "Ramakant Sharma",
        amount: "1,56,000",
        date: "12 Feb 2023",
        remark: "Salary",
        contact: "+91 52345 64545",
    },
    {
        name: "Ramakant Sharma",
        amount: "1,56,000",
        date: "12 Feb 2023",
        remark: "Order Payment",
        contact: "+91 52345 64545",
    },
    {
        name: "Ramakant Sharma",
        amount: "1,56,000",
        date: "12 Feb 2023",
        remark: "Salary",
        contact: "+91 52345 64545",
    },
    {
        name: "Ramakant Sharma",
        amount: "1,56,000",
        date: "12 Feb 2023",
        remark: "Order Payment",
        contact: "+91 52345 64545",
    },
]

const columns = [
    {
        accessorKey: "name",
        header: "Name",
        cell: ({row}) => <div className={'text-[16px]'}>{row.getValue("name")}</div>,
    },
    {
        accessorKey: "amount",
        header: "Amount",
        cell: ({row}) => (
            <div className="text-red-500 font-semibold text-[16px]">₹ {row.getValue("amount")}</div>
        ),
    },
    {
        accessorKey: "date",
        header: "Date",
        cell: ({row}) => <div className={'text-[16px]'}>{row.getValue("date")}</div>,
    },
    {
        accessorKey: "remark",
        header: "Remark",
        cell: ({row}) => <div className={'text-[16px]'}>{row.getValue("remark")}</div>,
    },
    {
        accessorKey: "contact",
        header: "Contact No.",
        cell: ({row}) => <div className={'text-[16px]'}>{row.getValue("contact")}</div>,
    },
    {
        id: "actions",
        cell: ({row}) => (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem onClick={() => navigator.clipboard.writeText(row.original.name)}>
                        Copy Name
                    </DropdownMenuItem>
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        ),
    },
]

export function HistoryDebit() {
    const [sorting, setSorting] = React.useState([])
    const [columnFilters, setColumnFilters] = React.useState([])
    const [columnVisibility, setColumnVisibility] = React.useState({})
    const [rowSelection, setRowSelection] = React.useState({})
    const [pagination, setPagination] = React.useState({
        pageIndex: 0,
        pageSize: 5,
    })

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onPaginationChange: setPagination,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
            pagination,
        },
    })

    return (
        <div className={'w-full bg-surface p-4'}>
            <div className="w-full space-y-4">
                {/* Top Header */}
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Debit History</h2>
                    <div className="flex items-center gap-3">
                        <Button className="bg-[#20744A] text-white hover:bg-green-700 mr-[70px]">
                            <Download className="mr-2 h-4 w-4"/> Export Data
                        </Button>
                        <div className="text-[16px]">Entries / Page</div>
                        <select
                            className="w-[70px] h-[30px] rounded-md bg-black text-white px-2 py-1"
                            value={table.getState().pagination.pageSize}
                            onChange={(e) => {
                                table.setPageSize(Number(e.target.value))
                            }}
                        >
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                        </select>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-transparent border-none shadow-none">
                    <Table className="border-separate border-spacing-y-[20px]">
                        <TableHeader>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <TableHead key={header.id} className={'text-[16px]'}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(header.column.columnDef.header, header.getContext())}
                                        </TableHead>
                                    ))}
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            {table.getRowModel().rows.length ? (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        className="h-[65px] bg-muted rounded-md shadow-sm "
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell key={cell.id}>
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={columns.length} className="text-center py-10">
                                        No results.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between py-2 text-sm text-muted-foreground">
                    <div>
                        Page {table.getState().pagination.pageIndex + 1} of{" "}
                        {table.getPageCount()}
                    </div>
                    <div className="space-x-2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                        >
                            ← Prev
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                        >
                            Next →
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    )
}
