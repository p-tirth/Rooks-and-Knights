import React from 'react'
import Gamefile from '../components/gamefile'
import dynamic from 'next/dynamic'

const DynamicGamefile = dynamic(() => import('../components/gamefile'), {
  ssr: false
})

export default function page() {
  return (
    <div>
      <DynamicGamefile/>
    </div>
  )
}
