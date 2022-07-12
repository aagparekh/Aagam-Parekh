import React from 'react'

const ProgressBar = (props) => {
  return (
    <div>
      <div className="progress mb-4" style={{ height: "1.5rem" }}>
            <div className="progress-bar bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" height="1000" style={{ width: props.width }}><b>{props.value}</b></div>
          </div>
    </div>
  )
}

export default ProgressBar
