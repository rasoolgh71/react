//import React from 'react';
//import ReactDOM from 'react-dom';



var HelloMessage=React.createClass({
       render:function (){
          var myStyle={
            fontSize:100,
            color:'#FF0000',
          }
         return (<div>
             <h1 style={myStyle}>Header</h1>
             </div>
         )
       },
});

var Hello=React.createClass({
      render:function(){
        alert("hi react")
      }
});

var App=React.createClass({
      constructor(props)
})

ReactDOM.render(<HelloMessage/>,document.getElementById('node'));
    //ReactDOM.getprint(<HelloMessage/>,document.getElementById('node'));
ReactDOM.render(<Hello/>,document.getElementById('node1'));
    //ReactDOM.render(<Hello/>,document.write("gooddby"))


//class App extends React.Component{
  // render(){
    //  return (<div> hello world
      // </div>);
   //},
//}
//export default App;

