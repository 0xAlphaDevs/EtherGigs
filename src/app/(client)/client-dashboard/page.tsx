"use client"

import { JobCard } from '@/components/clients/job-card'
import { Job } from '@/lib/types';
import React, { useState } from 'react'

const ClientDashboard = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  return (
    <div>
      {jobs.length > 0 ? (
        jobs.map((job: Job) => (
          <>
            <JobCard key={job.jobId} job={job} />
          </>
        ))
      ) : (
        <div className="text-2xl px-8 py-8 font-semibold text-center">
          No Active Jobs
        </div>
      )}
    </div>

  )
}

export default ClientDashboard