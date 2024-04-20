"use client"

import { ConnectKitButton } from 'connectkit'
import React from 'react'

const HomeNavbar = () => {
  return (
    <div className='flex justify-between items-start p-4'>
      <p className='font-semibold text-lg'>EtherGigs</p>
      <ConnectKitButton />
    </div>
  )
}

export default HomeNavbar