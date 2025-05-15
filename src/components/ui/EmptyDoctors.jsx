import React from 'react'
import { Link } from 'react-router'

export default function EmptyDoctors() {
  return (
    <div className='text-center mt-20'>
        <h3 className='text-2xl lg:text-5xl font-medium mb-2'>You have not Booked any appoinment yet</h3>
        <p className='text-gray-500 mb-8'>Our platform connects you with verified experienced doctores across variour speciaities - all at you conveniecnce</p>
        <Link to='/' className='btn btn-neutral'>Go to Home</Link>
    </div>
  )
}
