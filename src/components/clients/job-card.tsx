import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BadgeDollarSignIcon,
  BookUser,
  Briefcase,
  Calendar,
} from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { RecievedProposalsTable } from "./received-proposals-table";
import { Job, Proposal } from "@/lib/types";
import { useReadContract } from "wagmi";
import { etherGigsAbi, etherGigsAddress } from "@/lib/contract/EtherGigs";

export function JobCard({ job }: { job: Job }) {
  const [receivedProposals, setReceivedProposals] = useState<Proposal[]>([]);
  // fetch all proposals for this job
  const { data } = useReadContract({
    abi: etherGigsAbi,
    address: etherGigsAddress,
    functionName: "getAllActiveProposals",
    args: [job.jobId],
  });

  useEffect(() => {
    if (data) {
      console.log(data);
      // filter data where job.createdAt is not empty

      const filterData = (data as Proposal[]).filter((proposal: Proposal) => {
        return proposal.createdAt !== "";
      });

      setReceivedProposals(filterData as Proposal[]);
    }
  }, [data]);

  return (
    <div className="p-8 grid gap-8 ">
      <Card key={job.jobId} className={cn("bg-opacity-65 shadow-lg")}>
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            {job.title}
            <div className="px-2 py-1 text-white text-sm font-bold rounded-md bg-green-800 ">
              Job ID : {job.jobId.toString()}
            </div>
          </CardTitle>
          <CardDescription>
            <div>{job.description}</div>
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex gap-2 items-center">
            <Briefcase className="h-5" />
            <div className="flex gap-4">
              <div className="text-lg font-thin">Skills Required :</div>
              {job.tags.map((tag, index) => (
                <Badge key={index} className="text-sm bg-green-900  ">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <BadgeDollarSignIcon className="h-5" />
            <div className="text-lg font-thin">
              Budget : {Number(job.budget) / 10 ** 18}{" "}
              <span className="font-semibold">XTZ</span>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <BookUser className="h-5" />
            <div className="text-lg font-thin">
              Total Recieved Proposals : {receivedProposals.length}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex gap-2 items-center">
            <Calendar className="h-5" />
            <div className="font-semibold">Posted Date : {job.createdAt}</div>
          </div>

          <div className="flex gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button>View Proposals</Button>
              </DialogTrigger>
              <DialogContent className=" max-w-[95%] h-[90vh] bg-white">
                <RecievedProposalsTable
                  jobTitle={job.title}
                  receivedProposals={receivedProposals}
                />
              </DialogContent>
            </Dialog>
            {/* <Button>Close Job</Button> */}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
