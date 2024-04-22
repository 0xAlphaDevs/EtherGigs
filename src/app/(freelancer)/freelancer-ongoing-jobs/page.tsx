"use client";

import React, { useEffect, useState } from "react";
import { Proposal } from "@/lib/types";
import { OngoinJobsTable } from "@/components/freelancer/ongoing-jobs-table";
import { useAccount, useContractRead, useReadContract } from "wagmi";
import { etherGigsAbi, etherGigsAddress } from "@/lib/contract/EtherGigs";

const FreelancerOngoingJobs = () => {
  const { address } = useAccount();
  const [ongoingProposals, setOngoingProposals] = useState<Proposal[]>([]);

  const { data } = useReadContract({
    abi: etherGigsAbi,
    address: etherGigsAddress,
    functionName: "getAllProposalsByCreator",
    args: [address],
  });

  useEffect(() => {
    if (data) {
      console.log(data);
      // filter data based on status
      const filtered = (data as Proposal[]).filter((proposal: Proposal) => {
        return proposal.status === "accepted";
      });
      console.log(filtered);
      setOngoingProposals(filtered);
    }
  }, [data]);

  return (
    <div>
      <OngoinJobsTable ongoingProposals={ongoingProposals} />
    </div>
  );
};

export default FreelancerOngoingJobs;
