import HomeNavbar from '@/components/home/navbar';
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


export default function Home() {
  return (
    <>
      <HomeNavbar />
      <div className="flex flex-col items-center gap-12 justify-between p-24">
        <div className='flex flex-col gap-4 text-center'>
          <p className='text-5xl font-bold'> Welcome to EtherGigs</p>
          <p className="text-2xl text-center">
            A Decentralized freelancing platform connecting businesses and
            professionals
          </p>
        </div>
        <div>
          {/* TO DO :  Login functionality will be here */}
        </div>
        {/* Features card div */}
        <div className="grid grid-cols-3 gap-8">
          <Card className=" shadow-sm border-none h-full w-full bg-green-400 rounded-lg bg-opacity-15 border cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-110">
            <CardHeader>
              <CardTitle className="text-center">Decentralized</CardTitle>
              <CardDescription className="text-center ">
                EtherGigs is a decentralized freelancing platform connecting
                businesses and professionals
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="shadow-sm border-none h-full w-full bg-green-400 rounded-lg bg-opacity-15 border cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-110">
            <CardHeader>
              <CardTitle className="text-center"></CardTitle>
              <CardDescription className="text-center">

              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="shadow-sm border-none h-full w-full bg-green-400 rounded-lg bg-opacity-15 border cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-110">
            <CardHeader>
              <CardTitle className="text-center"></CardTitle>
              <CardDescription className="text-center">

              </CardDescription>
            </CardHeader>
          </Card>
        </div>
        {/* Footer */}
        <div className="fixed container mx-auto bottom-0 pb-4 ">
          <hr className="border-t-2 border-gray-600 dark:border-white mb-4" />
          <div className="flex justify-center items-center">
            <p>&copy; 2024 EtherGigs | All rights reserved</p>
          </div>
        </div>
      </div>
    </>
  );
}
