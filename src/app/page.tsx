import HomeNavbar from '@/components/home/navbar';
import React from 'react';

export default function Home() {
  return (
    <>
      <HomeNavbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className='flex flex-col gap-4 text-center'>
          <p className='text-5xl font-bold'> Welcome to EtherGigs</p>
          <p className="text-2xl text-center">
            A Decentralized freelancing platform connecting businesses and
            professionals
          </p>
        </div>
      </main>
    </>
  );
}
