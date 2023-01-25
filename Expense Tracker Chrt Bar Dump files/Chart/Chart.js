import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar'

function Chart(props) {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...dataPointValues)
  return (
    <React.Fragment>
        <div className="chart">                            {/* Since label is unique,so we will use it for populating the key prop */}
            {props.dataPoints.map((dataPoint) => {<ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label} />})}  
        </div>
        </React.Fragment>
  )
}

export default Chart