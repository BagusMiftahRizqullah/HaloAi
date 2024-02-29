import React from 'react'

function TopCards() {
  return (
    <div className='grid lg:grid-cols-5 gap-4 p-4'>

        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p clasname='text-2xl font-bold'>$7.2</p>
                <p clasname='text-gray-600'>Daly Revenue</p>
            </div>
        </div>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p clasname='text-2xl font-bold'>$7.2</p>
                <p clasname='text-gray-600'>Daly Revenue2</p>
            </div>
        </div>
        <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p clasname='text-2xl font-bold'>$7.2</p>
                <p clasname='text-gray-600'>Daly Revenue3</p>
            </div>
        </div>
    </div>
  )
}

export default TopCards