import HomeHeader from '@/components/HomeHeader'
import HomeSearch from '@/components/HomeSearch'
import React from 'react'
import Image from 'next/image'
import { TbHomeSearch } from 'react-icons/tb'

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className='flex flex-col items-center mt-24'>
        <Image
          src="https://logosmarcas.net/wp-content/uploads/2020/09/Google-Logo.png"
          alt="Google Logo"
          width={300}
          height={100}
        />
        <HomeSearch />
      </div>
    </>
  )
}
