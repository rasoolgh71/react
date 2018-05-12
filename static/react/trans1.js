
class App1 extends React.Component{

       render(){
         var mystyle={
           fontSize:100,
           color:'#FF0000',

         }
         return (<div>
            <h1 style={mystyle}>rasool</h1>
            </div>
          )
       }
}

class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       value: [{% for name, value in service_ips.items %}'{{value}}',{% endfor %}],
       count: {{ service_ips|length }}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(i, event) {
     let value = this.state.value.slice();
     value[i] = event.target.value;
     this.setState({value});
     //on input text change
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    //event.preventDefault();
  }

  addClick(){
    this.setState({count: this.state.count+1})
      //on add input clicked
  }

  removeClick(i){
     let value = this.state.value.slice();
     value.splice(i,1);
     this.setState({
        count: this.state.count - 1,
        value
     })
     //on input deleted
  }

  createUI(){
     let uiItems = [];
     let start=this.state.count+1;
     for(let i = 0; i <start ; i++){
         uiItems.push(
             <div key={i}>
                 <input type="text" className="input form-control ip-input" placeholder="0.0.0.0" name={"{{service_name}}-"+i} value={this.state.value[i] || ''} onChange={this.handleChange.bind(this,i)} />
                 <input type='button' value="-" className="btn add-more-adsl" onClick={this.removeClick.bind(this,i)}/>
             </div>
         )
     }
     return uiItems || null;
  }
  render() {
    return (
      <form method="post" className="col-sm-4">
      {% csrf_token %}
          {this.createUI()}
          <br /><input type='button' value='+' className="btn btn-info" onClick={this.addClick.bind(this)}/>
      </form>
    );
  }
}

ReactDOM.render(<App1/>,document.getElementById('node'));
ReactDOM.render(<App2 />, document.getElementById('saeeds'));