export const etherGigsAddress = "0x3DaA9b9f3Ba4A5828473075CE68C704FEC124E73";
export const etherGigsAbi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "jobId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "createdBy",
        type: "address",
      },
    ],
    name: "JobCompletedByFreelancer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "jobId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "createdBy",
        type: "address",
      },
    ],
    name: "JobCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "jobId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "createdBy",
        type: "address",
      },
    ],
    name: "ProposalAccepted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "jobId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "createdBy",
        type: "address",
      },
    ],
    name: "ProposalCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Received",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "jobId",
        type: "uint256",
      },
    ],
    name: "acceptProposal",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "jobId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "recipient",
        type: "address",
      },
    ],
    name: "approveJobCompletion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "jobId",
        type: "uint256",
      },
    ],
    name: "closeJob",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "title",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "string",
        name: "createdAt",
        type: "string",
      },
      {
        internalType: "string[]",
        name: "tags",
        type: "string[]",
      },
      {
        internalType: "uint256",
        name: "budget",
        type: "uint256",
      },
    ],
    name: "createJob",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "jobId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "createdAt",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "bid",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
    ],
    name: "createProposal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "location",
        type: "string",
      },
      {
        internalType: "string",
        name: "userType",
        type: "string",
      },
    ],
    name: "createUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllActiveJobs",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "jobId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "title",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "string",
            name: "status",
            type: "string",
          },
          {
            internalType: "string[]",
            name: "tags",
            type: "string[]",
          },
          {
            internalType: "uint256",
            name: "budget",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "createdAt",
            type: "string",
          },
          {
            internalType: "address",
            name: "createdBy",
            type: "address",
          },
        ],
        internalType: "struct IEtherGigs.Job[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "jobId",
        type: "uint256",
      },
    ],
    name: "getAllActiveProposals",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "proposalId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "jobId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "status",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "bid",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "string",
            name: "createdAt",
            type: "string",
          },
          {
            internalType: "address",
            name: "createdBy",
            type: "address",
          },
        ],
        internalType: "struct IEtherGigs.Proposal[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "walletAddress",
        type: "address",
      },
    ],
    name: "getAllJobsByCreator",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "jobId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "title",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "string",
            name: "status",
            type: "string",
          },
          {
            internalType: "string[]",
            name: "tags",
            type: "string[]",
          },
          {
            internalType: "uint256",
            name: "budget",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "createdAt",
            type: "string",
          },
          {
            internalType: "address",
            name: "createdBy",
            type: "address",
          },
        ],
        internalType: "struct IEtherGigs.Job[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "walletAddress",
        type: "address",
      },
    ],
    name: "getAllOngoingProposalsForClient",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "proposalId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "jobId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "status",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "bid",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "string",
            name: "createdAt",
            type: "string",
          },
          {
            internalType: "address",
            name: "createdBy",
            type: "address",
          },
        ],
        internalType: "struct IEtherGigs.Proposal[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "walletAddress",
        type: "address",
      },
    ],
    name: "getAllOngoingProposalsForFreelancer",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "proposalId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "jobId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "status",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "bid",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "string",
            name: "createdAt",
            type: "string",
          },
          {
            internalType: "address",
            name: "createdBy",
            type: "address",
          },
        ],
        internalType: "struct IEtherGigs.Proposal[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "walletAddress",
        type: "address",
      },
    ],
    name: "getAllProposalsByCreator",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "proposalId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "jobId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "status",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "bid",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "string",
            name: "createdAt",
            type: "string",
          },
          {
            internalType: "address",
            name: "createdBy",
            type: "address",
          },
        ],
        internalType: "struct IEtherGigs.Proposal[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "getUser",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "location",
            type: "string",
          },
          {
            internalType: "string",
            name: "userType",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "rating",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "xtzSpent",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "walletAddress",
            type: "address",
          },
        ],
        internalType: "struct IEtherGigs.User",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "jobIds",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "jobId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "markJobCompleted",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "jobId",
        type: "uint256",
      },
    ],
    name: "rejectProposal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];
