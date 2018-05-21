//import { GenericWeather } from 'react-weather';
//import React from 'react/react'
//import ReactDOM from 'react/react-dom'
//import browser from 'react/browser'


class App1 extends React.Component{
  render(){
  return(
     <div><h1>hi rasool</h1></div>
  )
  }
}



class Myclass extends React.Component{
  render(){
    return(
      <div>
        <h1> example test</h1>
      </div>
    )
  }
}
//export default App1
ReactDOM.render(<App1/>,document.getElementById("test"))
ReactDOM.render(<Myclass/>,document.getElementById("app"))

