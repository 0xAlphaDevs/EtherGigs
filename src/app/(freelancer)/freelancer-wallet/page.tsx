"use client";
import React, { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useBalance, useAccount } from "wagmi";

const FreelancerWallet = () => {
  const { address } = useAccount();

  const result = useBalance({
    address: address,
  });
  // console.log(result.data);

  return (
    <div className="flex flex-col gap-10 p-16">
      <div className="flex flex-col items-center gap-8 pt-8">
        <p className="font-semibold text-6xl">Hello, XYZ</p>
        <div className="flex gap-4">
          <MapPin />
          <p>On-Chain</p>
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

export default FreelancerWallet;
