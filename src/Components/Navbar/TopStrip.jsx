import React from 'react'
import { LocalShipping } from '@mui/icons-material'

function TopStrip() {
  return (
    <div className='bg-white shadow-md w-full z-20 top-10 m-4 text-center text-sm'>
      <p><LocalShipping className="mr-2" />Buy from Ghana, Support small businesses!</p>
    </div>
  )
}

export default TopStrip