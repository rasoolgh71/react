
class App extends React.Component{
   constructor(props){
      super(props);
      this.state={
        data:"initial state..."
      }
      this.updateState=this.updateState.bind(this);
   };
   updateState(){
      this.forceUpdate ();
      this.setState({data:Math.random()})

   }
   render(){
     return(
       <div>
         <h1>hi rasool</h1>
         <button onClick={this.updateState}>update</button>
         <h4>{this.state.data}</h4>
       </div>
     );
   }

}
class Text1 extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         data: ''
      }
      this.updateState = this.updateState.bind(this);
      this.clearInput = this.clearInput.bind(this);
   };
   updateState(e) {
      this.setState({data: e.target.value});
   }
   clearInput() {
      this.setState({data: ''});
      ReactDOM.findDOMNode(this.refs.myInput).focus();
   }
   render() {
      return (
         <div>
            <input value = {this.state.data} onChange = {this.updateState}
               ref = "myInput"></input>
            <button onClick = {this.clearInput}>CLEAR</button>
            <h4>{this.state.data}</h4>
         </div>
      );
   }
}
class Tolist extends React.Component{
    constructor(props){
       super(props)
       this.state={
          data:[]
       }
       this.myArray=""
       this.addList=this.addList.bind(this)
       this.getInput=this.getInput.bind(this)
    }
    addList(){
        const node = this.refs.myInput
        const text = node.value.trim()
        this.props.onAddClick(text)
        node.value = ''
        var item="ali"
        this.myArray=this.state.data.slice();
             this.myArray.push(item);
        //this.setState({data:myArray})
    }
    getInput(){
        this.setState({data:myArray})
        ReactDOM.findDOMNode(this.refs.myInput).focus();

    }
    render(){
       return (
         <div>
         <h3>add to do list</h3>
         <input type="text"  ref = "myInput"></input>
         <button onClick={(e),this.addList(e)} >Add</button>
         <li>{this.state.data}</li>
         </div>
       )
    }

}

ReactDOM.render(<App/>,document.getElementById("app"));
ReactDOM.render(<Text1/>,document.getElementById("text1"))
ReactDOM.render(<Tolist/>,document.getElementById("tolist"))