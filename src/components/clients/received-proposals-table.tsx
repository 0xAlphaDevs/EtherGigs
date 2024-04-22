"use client";

import * as React from "react";
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Proposal } from "@/lib/types";
import { useWriteContract } from "wagmi"; // 🟢
import { etherGigsAbi, etherGigsAddress } from "@/lib/contract/EtherGigs";

export function RecievedProposalsTable({
  jobTitle,
  receivedProposals,
}: {
  jobTitle: string;
  receivedProposals: Proposal[];
}) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [proposals, setProposals] = React.useState<Proposal[]>([]);

  const { isSuccess, isPending, writeContract } = useWriteContract({});

  React.useEffect(() => {
    setProposals(receivedProposals);
  }, [receivedProposals]);
  console.log(receivedProposals);

  const columns: ColumnDef<Proposal>[] = [
    {
      accessorKey: "proposalId",
      header: "Proposal Id",
      cell: ({ row }) => {
        const proposalId = parseInt(row.getValue("proposalId"));
        return <div className="capitalize">{proposalId}</div>;
      },
    },
    {
      accessorKey: "description",
      header: "Description",
      cell: ({ row }) => <div className="">{row.getValue("description")}</div>,
    },
    {
      accessorKey: "createdAt",
      header: "Sent Date",
      cell: ({ row }) => (
        <div className=" font-semibold px-2 bg-green-50 hover:text-white hover:bg-green-90 inline-block rounded-full ">
          {row.getValue("createdAt")}
        </div>
      ),
    },
    {
      accessorKey: "createdBy",
      header: "Gigster",
      cell: ({ row }) => (
        <div className="lowercase">{row.getValue("createdBy")}</div>
      ),
    },
    {
      accessorKey: "bid",
      header: () => <div className="">Bid Amount</div>,
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("bid")) / 10 ** 18;
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(amount);

        return <div className=" font-medium">{formatted}</div>;
      },
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const proposal = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <DotsHorizontalIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() =>
                  navigator.clipboard.writeText(proposal.proposalId)
                }
              >
                Copy Proposal ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              {/* <DropdownMenuItem>
                <Button
                  className="w-full"
                  onClick={() => {
                    writeApproval({
                      args: [
                        "0x1FD044132dDf03dF133bC6dB12Bd7C4093857523",
                        BigInt(proposal.bid),
                      ],
                    });
                  }}
                >
                  Approve Work
                </Button>
              </DropdownMenuItem> */}
              <DropdownMenuItem>
                <Button
                  className="w-full"
                  onClick={() => {
                    // write({
                    //   args: [proposal.proposalId, proposal.jobId],
                    // });
                    writeContract({
                      abi: etherGigsAbi,
                      address: etherGigsAddress,
                      functionName: "acceptProposal",
                      args: [proposal.proposalId, proposal.jobId],
                      value: BigInt(proposal.bid),
                    });
                    console.log(
                      "Accepting proposal",
                      proposal.proposalId,
                      proposal.jobId
                    );
                  }}
                >
                  Accept
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  const table = useReactTable({
    data: proposals,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
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
    },
  });

  return (
    <div className="w-full p-12 ">
      <div className="flex justify-center pb-4">
        <p className=" font-semibold text-3xl">{jobTitle}</p>
      </div>

      <div className="flex items-center py-4">
        <Input
          placeholder="Search a proposal by Id..."
          value={
            (table.getColumn("proposalId")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("proposalId")?.setFilterValue(event.target.value)
          }
          className="max-w-sm w-96 font-semibold border-green-900 "
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto bg-green-300 ">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border z-10 shadow-md bg-green-400 bg-opacity-20  my-4 z-80 ">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="font-bold ">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="font-thin hover:text-green-800 "
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
