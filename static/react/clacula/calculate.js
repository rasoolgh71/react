
class App extends React.Component{
   render(){
     return(
         <div style={{overflow: 'hidden'}}>
            <Header title='React Calc' />
            <div className="mt-md-5">
                <Calculator />
            </div>
         </div>
     )
   }
};

class Calculator extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            expression: '',
            value: '',
            history: [],
            showHistory: false
        };

        this.handleOnDigit = this.handleOnDigit.bind(this);
        this.handleOnClear = this.handleOnClear.bind(this);
        this.handleOnClearAll = this.handleOnClearAll.bind(this);
        this.handleOnDelete = this.handleOnDelete.bind(this);
        this.handleOnAdd = this.handleOnAdd.bind(this);
        this.handleOnSubtract = this.handleOnSubtract.bind(this);
        this.handleOnDivide = this.handleOnDivide.bind(this);
        this.handleOnMultiply = this.handleOnMultiply.bind(this);
        this.handleOnDecimalPoint = this.handleOnDecimalPoint.bind(this);
        this.handleOnEquals = this.handleOnEquals.bind(this);
        this.handleOnToggleSign = this.handleOnToggleSign.bind(this);
        this.handleOnHistorySelected = this.handleOnHistorySelected.bind(this);
        this.handleOnToggleHistory = this.handleOnToggleHistory.bind(this);
        this.handleOnClearHistory = this.handleOnClearHistory.bind(this);
    }


    handleOnAdd() {
        calculator.add();

        this.setState(() => ({
            expression: calculator.getExpression(),
            value: calculator.getValue().toString()
        }));
    }


    handleOnClear() {
        calculator.clear();

        this.setState(() => ({
            expression: calculator.getExpression(),
            value: calculator.getValue().toString()
        }));
    }


    handleOnClearAll() {
        calculator.clearAll();

        this.setState(() => ({
            expression: calculator.getExpression(),
            history: calculator.getHistory(),
            value: calculator.getValue().toString()
        }));
    }


    handleOnClearHistory() {
        calculator.clearHistory();

        this.setState(() => ({
            history: calculator.getHistory(),
            showHistory: false
        }));
    }


    handleOnDecimalPoint() {
        calculator.inputDecimal();

        this.setState(() => ({
            expression: calculator.getExpression(),
            value: calculator.getValue().toString()
        }));
    }


    handleOnDelete() {
        calculator.delete();

        this.setState(() => ({
            value: calculator.getValue().toString()
        }));
    }


    handleOnDigit(number) {
        calculator.inputDigit(number);

        this.setState(() => ({
            value: calculator.getValue()
        }));
    }


    handleOnDivide() {
        calculator.divide();

        this.setState(() => ({
            expression: calculator.getExpression(),
            value: calculator.getValue().toString()
        }));
    }


    handleOnEquals() {
        calculator.equals();

        this.setState(() => ({
            expression: calculator.getExpression(),
            value: calculator.getResult().toString(),
            history: calculator.getHistory()
        }));
    }


    handleOnHistorySelected(index) {
        calculator.loadHistory(index);

        this.setState(prevState => ({
            expression: prevState.history[index].expression,
            value: calculator.getValue().toString()
        }));
    }


    handleOnMultiply() {
        calculator.multiply();

        this.setState(() => ({
            expression: calculator.getExpression(),
            value: calculator.getValue().toString()
        }));
    }


    handleOnSubtract() {
        calculator.subtract();

        this.setState(() => ({
            expression: calculator.getExpression(),
            value: calculator.getValue().toString()
        }));
    }


    handleOnToggleHistory() {
        this.setState(prevState => ({ showHistory: !prevState.showHistory }));
    }


    handleOnToggleSign() {
        calculator.toggleSign();

        this.setState(() => ({
            value: calculator.getValue().toString()
        }));
    }


    render() {
        return (
            <div className="row">
                <div className="calculator col-md-5 mx-auto">
                    <Display value={this.state.value} expression={this.state.expression} />

                    <ControlPanel anyHistory={this.state.history.length > 0}
                        onToggleHistory={this.handleOnToggleHistory}/>

                    {
                        !this.state.showHistory && <Keypad onDigit={this.handleOnDigit}
                            onAdd={this.handleOnAdd}
                            onSubtract={this.handleOnSubtract}
                            onDivide={this.handleOnDivide}
                            onMultiply={this.handleOnMultiply}
                            onDecimalPoint={this.handleOnDecimalPoint}
                            onEquals={this.handleOnEquals}
                            onClear={this.handleOnClear}
                            onClearAll={this.handleOnClearAll}
                            onDelete={this.handleOnDelete}
                            onToggleSign={this.handleOnToggleSign} />
                    }

                    {
                        this.state.showHistory && <History history={this.state.history}
                            onClearHistory={this.handleOnClearHistory}
                            onSelected={this.handleOnHistorySelected} />
                    }
                </div>
            </div>
        );
    }
}

const Header = (props) => (
    <nav className="header navbar navbar-dark bg-dark">
        <div className="container">
            <div className="row mx-auto">
                <i className="fa fa-calculator fa-3x text-white my-auto"></i>
                <div className="h3 ml-3 my-auto text-light">{props.title}</div>
            </div>
        </div>
    </nav>
);

Header.defaultProps = {
    title: 'App'
};

Header.propTypes = {
    title: PropTypes.string
};

const Display = (props) => (
    <div className="mt-md-2" style={{position: 'relative'}}>
        <div className="pr-2 h4" style={{position: 'absolute', top: 0, right: 0}}>{props.expression}</div>
        <div className="display text-right pr-2 h3 d-md-none d-sm-block pt-5">{props.value}</div>
        <div className="display text-right pr-2 h1 d-none d-lg-none d-md-block pt-4">{props.value}</div>
        <div className="display text-right pr-2 display-4 d-none d-lg-block pt-4">{props.value}</div>
    </div>
);

Display.defaultProps = {
    expression: '',
    value: '0'
};

Display.propTypes = {
    expression: PropTypes.string,
    value: PropTypes.string
};

const ControlPanel = (props) => (
    <div className="control-panel my-2 mx-1">
        <button className="btn btn-block text-secondary" disabled={!props.anyHistory} onClick={props.onToggleHistory}>
            <i className="fa fa-history fa-2x"></i>
        </button>
    </div>
);

ControlPanel.defaultProps = {
    anyHistory: false,
    onToggleHistory: () => alert('toggle history')
};

ControlPanel.propTypes = {
    anyHistory: PropTypes.bool,
    onToggleHistory: PropTypes.func
};

const Keypad = (props) => {

    const handleOnDigit = (e) => {
        props.onDigit(e.target.value);
    };

    return (
        <div className="keypad">
            <div className="keypad-row">
                <button className="btn keypad-secondary-btn" value="clear-all" onClick={props.onClearAll}>CE</button>
                <button className="btn keypad-secondary-btn" value="clear" onClick={props.onClear}>C</button>
                <button className="btn keypad-secondary-btn" value="backspace" onClick={props.onDelete}><i className="fa fa-caret-left fa-lg"></i></button>
                <button className="btn keypad-secondary-btn" value="/" onClick={props.onDivide}>&divide;</button>
            </div>
            <div className="keypad-row">
                <button className="btn keypad-primary-btn" value="7" onClick={handleOnDigit}>7</button>
                <button className="btn keypad-primary-btn" value="8" onClick={handleOnDigit}>8</button>
                <button className="btn keypad-primary-btn" value="9" onClick={handleOnDigit}>9</button>
                <button className="btn keypad-secondary-btn" value="*" onClick={props.onMultiply}>&times;</button>
            </div>
            <div className="keypad-row">
                <button className="btn keypad-primary-btn" value="4" onClick={handleOnDigit}>4</button>
                <button className="btn keypad-primary-btn" value="5" onClick={handleOnDigit}>5</button>
                <button className="btn keypad-primary-btn" value="6" onClick={handleOnDigit}>6</button>
                <button className="btn keypad-secondary-btn" value="-" onClick={props.onSubtract}>&minus;</button>
            </div>
            <div className="keypad-row">
                <button className="btn keypad-primary-btn" value="1" onClick={handleOnDigit}>1</button>
                <button className="btn keypad-primary-btn" value="2" onClick={handleOnDigit}>2</button>
                <button className="btn keypad-primary-btn" value="3" onClick={handleOnDigit}>3</button>
                <button className="btn keypad-secondary-btn" value="+" onClick={props.onAdd}>&#43;</button>
            </div>
            <div className="keypad-row">
                <button className="btn keypad-secondary-btn" value="+-" onClick={props.onToggleSign}>&plusmn;</button>
                <button className="btn keypad-primary-btn" value="0" onClick={handleOnDigit}>0</button>
                <button className="btn keypad-secondary-btn" value="." onClick={props.onDecimalPoint}>.</button>
                <button className="btn keypad-secondary-btn" style={{color: '#4CAF50'}} value="=" onClick={props.onEquals}>=</button>
            </div>
        </div>
    );
};

Keypad.defaultProps = {
    onDigit: digit => alert(digit),
    onClear: () => alert('clear'),
    onClearAll: () => alert('clear-all'),
    onDelete: () => alert('delete'),
    onAdd: () => alert('add'),
    onEquals: () => alert('equals'),
    onDecimalPoint: () => alert('.'),
    onSubtract: () => alert('subtract'),
    onToggleSign: () => alert('+/-'),
    onDivide: () => alert('/'),
    onMultiply: () => alert('*')
};

Keypad.propTypes = {
    onDigit: PropTypes.func,
    onClear: PropTypes.func,
    onClearAll: PropTypes.func,
    onDelete: PropTypes.func,
    onAdd: PropTypes.func,
    onEquals: PropTypes.func,
    onDecimalPoint: PropTypes.func,
    onSubtract: PropTypes.func,
    onDivide: PropTypes.func,
    onMultiply: PropTypes.func,
    onToggleSign: PropTypes.func
};

const History = (props) => (
    <div className="history">
        {
            props.history.map((expression, i) => {
                return (
                    <div className="history-item" key={i}>
                        <button className="btn btn-block btn-light" onClick={() => props.onSelected(i)}>
                            <div className="p-2 text-right">
                                <div>{expression.expression}&nbsp;=</div>
                                <div className="font-weight-bold">{expression.result}</div>
                            </div>
                        </button>
                        <div className="history-trash" onClick={props.onClearHistory}>
                            <div className="text-center text-danger">
                                <i className="fa fa-trash-o fa-2x my-2"></i>
                            </div>
                        </div>
                    </div>
                );
            })
        }
    </div>
);

History.defaultProps = {
    history: [],
    onClearHistory: () => alert('clear history'),
    onSelected: () => alert('selected')
};

History.propTypes = {
    history: PropTypes.array,
    onClearHistory: PropTypes.func,
    onSelected: PropTypes.func
};

ReactDOM.render(<App/>,document.getElementById("cal"))