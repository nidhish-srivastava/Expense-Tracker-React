import React from 'react'
import './ChartBar.css'

function ChartBar(props) {

    let barFillHeight = '0%';
    if(props.maxValue > 0) {
        barFillHeight = Math.round((props.value/props.maxValue)*100) + '%';   // Now this height will be set as the CSS height for chart-bar__fill
    }
  return (
    <div className='chart-bar'>
        <div className="chart-bar__inner">
            <div className="chart-bar__fill" style={{height:barFillHeight}}></div>    {/*One thing thath is missing is the height of the chart bar,which depends on value prop */}
        </div>
            <div className="chart-bar__label">{props.label}</div>
    </div>
  )
}

export default ChartBar