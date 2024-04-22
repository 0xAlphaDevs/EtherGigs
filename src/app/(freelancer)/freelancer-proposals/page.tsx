"use client";

import React, { useEffect, useState } from "react";
import { Proposal } from "@/lib/types";
import { SendProposalTable } from "@/components/freelancer/send-proposal-table";
import { useAccount, useContractRead, useReadContract } from "wagmi";
import { etherGigsAbi, etherGigsAddress } from "@/lib/contract/EtherGigs";

const FreelancerProposals = () => {
  const { address } = useAccount();
  const [sentProposals, setSentProposals] = useState<Proposal[]>([]);

  const { data } = useReadContract({
    abi: etherGigsAbi,
    address: etherGigsAddress,
    functionName: "getAllProposalsByCreator",
    args: [address],
  });

  useEffect(() => {
    if (data) {
      console.log(data);
      setSentProposals(data as Proposal[]);
    }
  }, [data]);

  return (
    <div>
      <SendProposalTable sentProposals={sentProposals} />
    </div>
  );
};

export default FreelancerProposals;
