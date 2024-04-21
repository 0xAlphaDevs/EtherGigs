export type User = {
  name: string;
  location: string;
  userType: string;
  rating: number;
  amountSpent: number;
};

export type Job = {
  jobId: string;
  title: string;
  description: string;
  status:
    | "active"
    | "ongoing"
    | "completedbyfreelancer"
    | "approvedbyclient"
    | "closed";
  tags: string[];
  budget: number;
  proposals: number;
  createdAt: string;
  createdBy: string;
};

export type Proposal = {
  proposalId: string;
  jobId: string;
  status: "pending" | "accepted" | "rejected";
  bid: number;
  description: string;
  createdAt: string;
  createdBy: string;
};
