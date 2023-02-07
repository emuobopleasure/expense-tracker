import React from 'react'

const ChartBar = ({label, maxValue, value }) => {
    let barFillHeight = '0%'

    if(maxValue > 0) {
        barFillHeight = Math.round(( value / maxValue) * 100) + '%'
    }

  return (
    <div className='chart-bar flex flex-col items-center'>
        <div className='chartbar-inner rounded-[1rem] bg-gray-100 flex flex-col justify-end h-full w-[4.5vw]'>
            <div className='chartbar-fill bg-[#ef8767] w-full rounded-[1rem]' style={{ height: barFillHeight}}>

            </div>
        </div>
        <div className='chartbar-label text-[12px]'>
            {label}
        </div>
    </div>
  )
}

export default ChartBar