import React from 'react'
import { MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GigsterWallet = () => {
  return (
    <div>  <div className="flex flex-col gap-10 p-16">
      <div className='flex flex-col items-center gap-8 pt-8'>
        <p className='font-semibold text-6xl'>Hello, XYZ</p>
        <div className='flex gap-4'>
          <MapPin />
          <p>Location</p>
        </div>
      </div>
      <Card className=" bg-opacity-65 shadow-md mx-72">
        <CardHeader className="flex justify-center items-center">
          <CardTitle>Balances</CardTitle>
          <div className="border border-solid border-green-800 w-full" />
        </CardHeader>
        <CardContent className="flex flex-col gap-8 items-center">
          <p className="font-bold text-lg">Etherlink Testnet</p>
          <div>XTZ Balance : </div>
        </CardContent>
      </Card>
    </div></div>
  )
}

export default GigsterWallet