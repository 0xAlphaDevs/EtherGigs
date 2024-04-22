"use client";

import React, { useEffect, useState } from "react";
import { Job } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { JobCard } from "@/components/freelancer/job-card";
import { useAccount, useContractRead, useReadContract } from "wagmi";
import { useRouter } from "next/navigation";
import { etherGigsAbi, etherGigsAddress } from "@/lib/contract/EtherGigs";

const FreelancerDashboard = () => {
  const router = useRouter();
  const { address } = useAccount();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);

  const { data } = useReadContract({
    abi: etherGigsAbi,
    address: etherGigsAddress,
    functionName: "getAllActiveJobs",
    args: [],
  });

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
    if (data) {
      console.log(data);
      // filter data where job.createdAt is not empty

      const filterData = (data as Job[]).filter((job: Job) => {
        return job.createdAt !== "";
      });
      setJobs(filterData as Job[]);
      setFilteredJobs(filterData as Job[]);
    }
  }, [data]);

  const handleSearchInputChange = (event: any) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

    if (newSearchTerm === "") {
      setFilteredJobs(jobs);
      return;
    }

    // Filter credentials based on the search term
    const filtered = jobs.filter((job) => {
      return job.title.toLowerCase().includes(newSearchTerm.toLowerCase());
    });

    setFilteredJobs(filtered);
  };

  return (
    <>
      <div className="flex flex-col px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="text-4xl px-8 py-8 font-semibold ">
            All Active Jobs
          </div>
          <Input
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={handleSearchInputChange}
            className="max-w-sm w-96 font-semibold border-green-900"
          />
        </div>
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job: Job) => <JobCard key={job.jobId} job={job} />)
        ) : (
          <div className="text-2xl px-8 py-8 font-semibold text-center">
            {jobs.length > 0 ? "No Matching Jobs" : "No Active Jobs"}
          </div>
        )}
      </div>
    </>
  );
};

export default FreelancerDashboard;
