"use client"

import CreateNewJobForm from '@/components/clients/create-new-job-form';
import { JobCard } from '@/components/clients/job-card'
import { Job } from '@/lib/types';
import { useAccount } from "wagmi";
import React, { useEffect, useState } from 'react'
import { useContractRead } from "wagmi";
import { useRouter } from 'next/navigation';

const ClientDashboard = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const { address } = useAccount();
  const router = useRouter()

  const { data } = useContractRead({
    abi: ,
    address: "",
    functionName: "getAllJobsByCreator",
    args: [address],
  });


  useEffect(() => {
    if (data) {
      console.log(data);

      setJobs(data as Job[]);
    }
  }, [data]);

  const { } = useContractRead({
    abi: ,
    address: "",
    functionName: "getUser",
    args: [address],
    onSuccess: (data: any) => {
      switch (data.userType) {
        case "client":
          router.push("/client-dashboard");
          break;
        case "freelancer":
          router.push("/freelancer-dashboard");
          break;
        default:
          router.push("/");
          break;
      }
    },
    onError: (error: any) => {
      console.log(error);
      router.push("/");
    },
  });

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

  )
}

export default ClientDashboard