"use client"

import React, { useEffect, useState } from 'react'
import { Proposal } from '@/lib/types';
import { SendProposalTable } from '@/components/freelancer/send-proposal-table';
import { useAccount, useContractRead } from 'wagmi';


const FreelancerProposals = () => {
  const { address } = useAccount();
  const [sentProposals, setSentProposals] = useState<Proposal[]>([]);

  const { data } = useContractRead({
    abi: ,
    address: "",
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
  )
}

export default FreelancerProposals