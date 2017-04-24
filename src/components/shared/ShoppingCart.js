import React from 'react'
import ReactGA from 'react-ga'

function setCustomMetric() {
  ReactGA.set({metric1: 123})
  console.log('Custom metric1 set')
}

function setCustomMetric2() {
  ReactGA.set({metric2: 123})
  console.log('Custom metric2 set')
}
function setCustomDimension() {
  const dimensionValue = 'SOME_DIMENSION_VALUE'
  ReactGA.set({dimension1: dimensionValue})
}

export class ShoppingCart extends React.Component {

  render() {
    return (
      <div>
        <button onClick={setCustomMetric}>Custom Metric 1</button>
        <button onClick={setCustomMetric2}>Custom Event</button>
        <button onClick={setCustomDimension}>Custom Dimension 1</button>
        <ReactGA.OutboundLink
          eventLabel="MyLable"
          to="https://google.com"
          target="_blank">
          Link to Google
        </ReactGA.OutboundLink>
      </div>
    )
  }
}


