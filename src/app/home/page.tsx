"use client"

import React, { useState, useEffect } from 'react'
import { useAccount } from "wagmi";
import HomeNavbar from '@/components/home/navbar'
import { useRouter } from 'next/navigation';
import { ConnectKitButton } from 'connectkit';
import { UserMetadata } from '@/components/home/user-metadata';

const Home = () => {
  const { address } = useAccount();
  const router = useRouter()
  const [isUserRegistered, setIsUserRegistered] = useState(true);
  const [recheckUser, setRecheckUser] = useState<boolean>(false);

  useEffect(() => {
    if (address) {
      console.log("wallet connected", address);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  return (
    <div>
      <HomeNavbar />
      <div>
        {isUserRegistered ? (
          <p className='flex justify-center font-semibold text-2xl pt-48'>Connect your wallet to get started with EtherGigs 😊</p>
        ) : (
          <>
            <p>
              You are not registered as a Client or Freelancer 😞. Please click
              button below to continue to app.👇🏻
            </p>
            <UserMetadata setRecheckUser={setRecheckUser} />
          </>
        )}
      </div>
    </div>
  )
}

export default Home