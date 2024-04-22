"use client";

import { OngoingJobtable } from "@/components/clients/ongoing-job-table";
import { etherGigsAbi, etherGigsAddress } from "@/lib/contract/EtherGigs";
import { Proposal } from "@/lib/types";
import React, { useState, useEffect } from "react";
import { useReadContract } from "wagmi";
import { useAccount } from "wagmi";

const ClientOngoingJobs = () => {
  const { address } = useAccount();
  const [ongoingProposals, setOngoingProposals] = useState<Proposal[]>([]);

  const { data } = useReadContract({
    abi: etherGigsAbi,
    address: etherGigsAddress,
    functionName: "getAllOngoingProposalsForClient",
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
    <div className="flex justify-center items-center ">
      <OngoingJobtable ongoingProposals={ongoingProposals} />
    </div>
  );
};

export default ClientOngoingJobs;
