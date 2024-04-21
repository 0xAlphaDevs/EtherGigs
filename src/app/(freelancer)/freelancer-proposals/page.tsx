"use client"

import React, { useState } from 'react'
import { Proposal } from '@/lib/types';
import { SendProposalTable } from '@/components/freelancer/send-proposal-table';


const FreelancerProposals = () => {
  const [sentProposals, setSentProposals] = useState<Proposal[]>([]);
  return (
    <div>
      <SendProposalTable sentProposals={sentProposals} />
    </div>
  )
}

export default FreelancerProposals