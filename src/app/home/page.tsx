"use client";

import React, { useState, useEffect } from "react";
import { useAccount, useReadContract } from "wagmi";
import HomeNavbar from "@/components/home/navbar";
import { useRouter } from "next/navigation";
import { ConnectKitButton } from "connectkit";
import { UserMetadata } from "@/components/home/user-metadata";
import { etherGigsAbi, etherGigsAddress } from "@/lib/contract/EtherGigs";

const Home = () => {
  const { address } = useAccount();
  const router = useRouter();
  const [isUserRegistered, setIsUserRegistered] = useState(false);
  const [recheckUser, setRecheckUser] = useState<boolean>(false);

  const { data: userData, isError } = useReadContract({
    abi: etherGigsAbi,
    address: etherGigsAddress,
    functionName: "getUser",
    args: [address],
  });

  useEffect(() => {
    if (address) {
      console.log("wallet connected", address);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  useEffect(() => {
    if (userData) {
      console.log(userData);
      setIsUserRegistered(true);
      //@ts-ignore
      if (userData.userType == "freelancer")
        router.push("/freelancer-dashboard");
      // @ts-ignore
      else if (userData.userType == "client") {
        router.push("/client-dashboard");
      }
    }
  }, [userData, recheckUser]);

  return (
    <div>
      <HomeNavbar />
      <div>
        {!address ? (
          <p className="flex justify-center font-semibold text-2xl pt-48">
            Connect your wallet to get started with EtherGigs 😊
          </p>
        ) : (
          <>
            {isUserRegistered ? (
              <p className="flex justify-center font-semibold text-2xl pt-48">
                Loading ...
              </p>
            ) : (
              <div className="text-center ">
                <p className="flex justify-center font-semibold text-2xl pt-48 mb-10">
                  You are not registered as a Client or Freelancer 😞. Please
                  click button below to continue to app.👇🏻
                </p>
                <UserMetadata setRecheckUser={setRecheckUser} />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
