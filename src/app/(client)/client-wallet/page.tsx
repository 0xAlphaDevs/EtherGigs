"use client";
import React, { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useBalance, useAccount, useReadContract } from "wagmi";
import { etherGigsAbi, etherGigsAddress } from "@/lib/contract/EtherGigs";

interface User {
  name: string;
  location: string;
  userType: string;
}

const ClientWallet = () => {
  const { address } = useAccount();

  const [user, setUser] = useState<User>({
    name: "",
    location: "",
    userType: "",
  });

  const { data: userData, isError } = useReadContract({
    abi: etherGigsAbi,
    address: etherGigsAddress,
    functionName: "getUser",
    args: [address],
  });

  const result = useBalance({
    address: address,
  });

  useEffect(() => {
    if (userData)
      //@ts-ignore
      setUser(userData);
  }, [userData]);

  return (
    <div className="flex flex-col gap-10 p-16">
      <div className="flex flex-col items-center gap-8 pt-8">
        <p className="font-semibold text-6xl">{user.name}</p>
        <div className="flex gap-4">
          <MapPin />
          <p>{user.location}</p>
        </div>
      </div>
      <Card className=" bg-opacity-65 shadow-md mx-72">
        <CardHeader className="flex justify-center items-center">
          <CardTitle>Balances</CardTitle>
          <div className="border border-solid border-green-800 w-full" />
        </CardHeader>
        <CardContent className="flex flex-col gap-8 items-center">
          <p className="font-bold text-lg">Etherlink Testnet</p>
          <div>
            Your Balance :{" "}
            <span className="font-semibold text-blue-500">
              {result.data?.formatted} {result.data?.symbol}{" "}
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientWallet;
