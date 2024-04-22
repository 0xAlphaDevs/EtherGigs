"use client";

import CreateNewJobForm from "@/components/clients/create-new-job-form";
import { JobCard } from "@/components/clients/job-card";
import { Job } from "@/lib/types";
import { useAccount, useReadContract } from "wagmi";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { etherGigsAbi, etherGigsAddress } from "@/lib/contract/EtherGigs";

const ClientDashboard = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const { address } = useAccount();
  const router = useRouter();

  const { data } = useReadContract({
    abi: etherGigsAbi,
    address: etherGigsAddress,
    functionName: "getAllJobsByCreator",
    args: [address],
  });

  useEffect(() => {
    if (data) {
      console.log(data);

      setJobs(data as Job[]);
    }
  }, [data]);

  const { data: userData, isError } = useReadContract({
    abi: etherGigsAbi,
    address: etherGigsAddress,
    functionName: "getUser",
    args: [address],
  });

  // 🟡
  // useEffect(() => {
  //   if (userData && !isError) {
  //     //@ts-ignore
  //     switch (userData.userType) {
  //       case "client":
  //         router.push("/client-dashboard");
  //         break;
  //       case "freelancer":
  //         router.push("/freelancer-dashboard");
  //         break;
  //       default:
  //         router.push("/home");
  //         break;
  //     }
  //   } else {
  //     router.push("/home");
  //   }
  // }, [userData, isError]);

  useEffect(() => {
    if (!address) {
      router.push("/");
    } else {
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  return (
    <div>
      <CreateNewJobForm />
      {jobs.length > 0 ? (
        jobs.map((job: Job) => (
          <>
            <JobCard key={job.jobId} job={job} />
          </>
        ))
      ) : (
        <div className="text-2xl px-8 py-8 font-semibold text-center">
          No Active Jobs
        </div>
      )}
    </div>
  );
};

export default ClientDashboard;
