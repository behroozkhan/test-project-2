import React from 'react';

export default class App extends React.Component{
  render () {
    return (
      <iframe src={`http://localhost:3000/`} style={{
        width: "80vw",
        height: "80vh"
      }}>

      </iframe>
    )
  }
}
