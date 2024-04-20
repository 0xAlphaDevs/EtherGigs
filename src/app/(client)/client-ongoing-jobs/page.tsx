"use client"

import { OngoingJobtable } from '@/components/clients/ongoing-job-table'
import { Proposal } from '@/lib/types';
import React, { useState } from 'react'


const ClientOngoingJobs = () => {

  const [ongoingProposals, setOngoingProposals] = useState<Proposal[]>([]);
  return (
    <div className="flex justify-center items-center ">
      <OngoingJobtable ongoingProposals={ongoingProposals} />
    </div>
  )
}

export default ClientOngoingJobs