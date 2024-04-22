import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center gap-12 justify-between p-24">
        <div className='flex flex-col gap-4 text-center'>
          <div className='flex justify-center pb-4'>
            <Image
              src="favicon.svg"
              width={100}
              height={100}
              alt="Picture of the app"
            />
          </div>
          <p className='text-5xl font-bold'> Welcome to EtherGigs</p>
          <p className="text-2xl text-center">
            A Decentralized freelancing platform connecting businesses and
            professionals
          </p>
        </div>
        <Link href="/home">
          <Button className='bg-green-950 hover:bg-green-900 text-2xl'>Launch App</Button>
        </Link>
        {/* Features card div */}
        <div className="grid grid-cols-3 gap-8 fixed bottom-32 mx-12">
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
              <CardTitle className="text-center">Transaction Fee </CardTitle>
              <CardDescription className="text-center">
                Very low transaction
                fees of less than 1% and
                get paid instantly.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="shadow-sm border-none h-full w-full bg-green-400 rounded-lg bg-opacity-15 border cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-110">
            <CardHeader>
              <CardTitle className="text-center">Security</CardTitle>
              <CardDescription className="text-center">
                Secure and automated payments through smart contract.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
        {/* Footer */}
        <div className="fixed container mx-auto bottom-0 pb-4 ">
          <hr className="border-t-2 border-green-900 dark:border-white mb-4" />
          <div className="flex justify-center items-center">
            <p>&copy; 2024 EtherGigs | All rights reserved</p>
          </div>
        </div>
      </div>
    </>
  );
}
