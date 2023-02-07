import React from 'react'
import ChartBar from './ChartBar'

const Chart = ({dataPoints}) => {
    const dataPointsValues = dataPoints.map((dataPoint) => dataPoint.value)
    const totalMaximum = Math.max(...dataPointsValues)
  return (
    <div className='chart flex justify-around h-[20vh] md:h-[10rem]'>
        {
            dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />
            ))
        }
    </div>
  )
}

export default Chart