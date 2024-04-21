import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Job } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import {
  BadgeDollarSignIcon,
  BookUser,
  Briefcase,
  Calendar,
} from "lucide-react";
import SendProposalForm from "./send-proposal-form";

export function JobCard({ job }: { job: Job }) {

  return (
    <div className="p-8 grid gap-8 ">
      <Card
        key={job.jobId}
        className={cn(
          "bg-opacity-65 shadow-lg "
        )}
      >
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            {job.title}
            <div className="px-2 py-1 text-white text-sm font-bold rounded-md bg-green-800 ">
              Job Id : {job.jobId.toString()}
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
                <Badge
                  key={index}
                  className="text-sm bg-green-900"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <BadgeDollarSignIcon className="h-5" />
            <div className="text-lg font-thin">
              Budget : $ {Number(job.budget) / 10 ** 18}
            </div>
          </div>
          {/* <div className="flex gap-2 items-center">
            <BookUser className="h-5" />
            <div className="text-lg font-thin">
              Total Proposals : {job.proposals}
            </div>
          </div> */}
          <div className="flex gap-2 items-center">
            <BookUser className="h-5" />
            <div className="text-lg font-thin">
              Creator :{" "}
              <span className="text-blue-600 font-normal cursor-pointer">
                {job.createdBy}
              </span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex gap-2 items-center">
            <Calendar className="h-5" />
            <div className="font-semibold">Posted Date : {job.createdAt}</div>
          </div>
          <div className="flex gap-4">
            <SendProposalForm jobId={job.jobId.toString()} />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}