"use client"

import React, { useState } from 'react'
import { Proposal } from '@/lib/types';
import { OngoinJobsTable } from '@/components/gigsters/ongoing-jobs-table';

const GigsterOngoingJobs = () => {
  const [ongoingProposals, setOngoingProposals] = useState<Proposal[]>([]);
  return (
    <div>
      <OngoinJobsTable ongoingProposals={ongoingProposals} />
    </div>
  )
}

export default GigsterOngoingJobs