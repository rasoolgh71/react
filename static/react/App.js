//import PropTypes from 'prop-types
//import React from 'react';
//import ReactDOM from 'react-dom';
//import MyComponent from 'prop-types';

class App1 extends React.Component{

       render(){
         var mystyle={
           fontSize:100,
           color:'#FF0000',

         }
         return (<div>
            <Astate/>
            <h1 style={mystyle}>rasool</h1>
            </div>
          )
       }
}
class Astate extends React.Component{
     constructor(){
        super()
        this.state1={
          header:"header",
          content:"content"
        }
        this.info={
           data:[
              {"id":1,
               "name":"rasool",
               "age":20
              },

             {"id":2,
              "name":"ali",
              "age":30
             },

           ]
        }
     }
     render(){
       return (<div>
         <h1>{this.state1.header}</h1>
         <h2>{this.state1.content}</h2>
         <h3>{this.info.data.id}</h3>
         </div>
       );

     }
}
class App extends React.Component{
    constructor(){
      super();
      this.state={
         data:[
            {"id":1,
            "name":"rasool",
            "age":20
            },

            {"id":2,
            "name":"ali",
            "age":30
            },

            {"id":3,
            "name":"hadi",
            "age":40
            },

            {"id":4,
            "name":"hasan",
            "age":40
            },


         ]
      }
    }
    render(){
      var mytable={
           color:"#0000FF",
           border: '30px solid green'

      }
      return (

         <div>
         <Header/>
           <table style={mytable}>
               <tbody>
                  {this.state.data.map((person,i) => <TableRow key={i}
                     data={person}/>)}
               </tbody>
           </table>
         </div>

      );
    }
}

class Header extends React.Component{
     render(){
       return(<div><h1>HEADER</h1></div>
        )
     }
}

class TableRow extends React.Component{
   render(){
       return (
          <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
          </tr>

       );
   }
}

class Type1 extends React.Component{
   render(){
     return (
        <div>
           <h1>Hello,{this.props.name}</h1>
           <h3>Array,{this.props.propArray}</h3>
           <h3>Boll,{this.props.propBool}</h3>
           <h3>propFunc,{this.props.propFunc(3)}</h3>
           <h3>propNumber,{this.props.propNumber}</h3>
            <h3>propString,{this.props.propString}</h3>
        </div>
     )
   }

}

Type1.propTypes={
  name:PropTypes.string,
  propArray:PropTypes.array.isRequired,
  propBool:PropTypes.bool.isRequired,
  propFunc:PropTypes.func,
  propNumber:PropTypes.number,
  propString:PropTypes.string,
}

Type1.defaultProps = {
   name:"rasoolghanan.com",
   propArray:[1,2,3,4,5],
   propBool:true,
   propFunc:function(e){
     return e
   },
   propNumber:2,
   propString:"hello proptype",
}

class Api extends React.Component{
   constructor(){
     super();
     this.state={
       data:[]
     }
     this.setStateHandler=this.setStateHandler.bind(this);
     this.randomNumber=this.randomNumber.bind(this);
   }
   setStateHandler(){
      var item="state item..."
      var myArray=this.state.data.slice();
            myArray.push(item);
      this.setState({data:myArray})

   };
   randomNumber(){
      this.forceUpdate();

   }

   render(){
     return (
     <div>
       <button onClick={this.setStateHandler}>set state</button>
       <h4>State Array:{this.state.data}</h4>

       <button onClick={this.randomNumber}>random number</button>
        <h4>Random number:{Math.random()}</h4>
     </div>
     )
   }
}
class Add1 extends React.Component{
  constructor(props){
    super(props)
    this.state={
      data:0
    }
    this.addNumber=this.addNumber.bind(this)
  };
  addNumber(){
     this.setState({data:this.state.data+1})
  }

  render(){
    return (
      <div>
         <button onClick={this.addNumber}>increment</button>
         <Content myNumber={this.state.data}></Content>
      </div>
    );
  }
}
class Content extends React.Component{
   componentWillMount(){
      //document.write("component will mount")
      console.log("component will mount")
   }
   componentDidMount(){
     // document.write("comonent did mount")
      console.log("comonent did mount")
   }
   componentWillReceiveProps(){
      //document.write("component will recive props")
      console.log("component will recive props")
   }
   render(){
     return(
       <div>
          <h3>{this.props.myNumber}</h3>
       </div>
     );
   }
}
class Text1 extends React.Component{
   constructor(props){
      super(props);
      this.state={
        data:"hi rasool..."
      }
      this.updateState=this.updateState.bind(this);
   }
   updateState(e){
      this.setState({data:e.target.value})
   }
   render(){
     return (
        <div>
          <input type="text" value={this.state.data} onChange={this.updateState}/>
          <h4>{this.state.data}</h4>
        </div>
     );
   }
}


ReactDOM.render(<App1/>,document.getElementById('node'));
//ReactDOM.render(<Astate/>,document.getElementById('app1'));
ReactDOM.render(<App/>,document.getElementById('app'));
//ReactDOM.render(<Type1/>,document.getElementById('type'));
ReactDOM.render(<Api/>,document.getElementById('api'));
ReactDOM.render(<Add1/>,document.getElementById('incre'));
ReactDOM.render(<Text1/>,document.getElementById('text1'));

