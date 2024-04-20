"use client"

import React, { useState } from 'react'
import { Proposal } from '@/lib/types';
import { SendProposalTable } from '@/components/gigsters/send-proposal-table';


const GigsterProposals = () => {
  const [sentProposals, setSentProposals] = useState<Proposal[]>([]);
  return (
    <div>
      <SendProposalTable sentProposals={sentProposals} />
    </div>
  )
}

export default GigsterProposals