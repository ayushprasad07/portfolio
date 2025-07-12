import React from 'react'

const Studies = () => {
  return (
    <div className='h-[40rem] flex flex-col text-start justify-center  p-8'>
      <div className='w-full flex flex-col text-start mx-auto px-10 md:px-10'>
        <div>
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
            Studies 
          </h1>
        </div>
        <div className='my-8'>
          <h3 className='text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600'>KIET Group of Institiutons</h3>
          <p className='font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-700'>B.Tech : Computer Science Of Technology (AI) | CGPA: 9.32</p>
        </div>
        <div className='my-8'>
          <h3 className='text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600'>Aparnaa World School, Jharsuguda, Odisha</h3>
          <p className='font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-700'>Intermediate: CBSE | PCM | 92%</p>
        </div>
        <div className='my-8'>
          <h3 className='text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600'>St. Thomas English School, Jharsuguda, Odisha</h3>
          <p className='font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-700'>10th: ICSE | 91%</p>
        </div>
      </div>
    </div>
  )
}

export default Studies
