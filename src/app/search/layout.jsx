import React from 'react'
import searchHeader from '@/components/searchHeader'
import './../globals.css'

export default function layout({children}) {
  return (
    <div>
        <searchHeader />
        {children}
    </div>
  )
}
