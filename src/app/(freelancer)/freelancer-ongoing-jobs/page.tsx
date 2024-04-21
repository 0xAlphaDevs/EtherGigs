"use client"

import React, { useState } from 'react'
import { Proposal } from '@/lib/types';
import { OngoinJobsTable } from '@/components/freelancer/ongoing-jobs-table';

const FreelancerOngoingJobs = () => {
  const [ongoingProposals, setOngoingProposals] = useState<Proposal[]>([]);
  return (
    <div>
      <OngoinJobsTable ongoingProposals={ongoingProposals} />
    </div>
  )
}

export default FreelancerOngoingJobs