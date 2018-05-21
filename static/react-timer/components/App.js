//import React, { Component } from 'react';
//import Timer from './Timer/Timer';

//import Header from './Header'
class App extends React.Component {

    constructor() {
        super();

        this.state = {
            title: 'React Timer'
        };
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} />

                <div className="container mt-5">
                    <div className="d-flex flex-row">
                        <div className="col-md-4 mx-auto">
                            <Timer />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class Timer extends React.Component {

    constructor() {
        super();
        this.state = {
            hours: '00',
            minutes: '00',
            seconds: '00',
            unitOfTime: null,
            status: null,
            canStart: null
        };

        this.handleDisplayFocusChange = this.handleDisplayFocusChange.bind(this);
        this.handleKeypadClick = this.handleKeypadClick.bind(this);
        this.handleControlsStart = this.handleControlsStart.bind(this);
        this.handleControlsResume = this.handleControlsResume.bind(this);
        this.handleControlsStop = this.handleControlsStop.bind(this);
        this.handleControlsReset = this.handleControlsReset.bind(this);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    // HANDLE DISPLAY


    handleDisplayFocusChange(unitOfTime) {
        this.setState(() => ({ unitOfTime }));
    }


    // HANDLE KEYPAD


    handleKeypadClick(time) {

        if (this.state.unitOfTime === 'HH') {
            this.setHours(time);
        } else if (this.state.unitOfTime === 'MM') {
            this.setMinutes(time);
        } else if (this.state.unitOfTime === 'SS') {
            this.setSeconds(time);
        }

        this.canStart();
    }

    setHours(hours) {
        if (hours < 0) {
            this.setState(() => ({ hours: '00' }));
        } else {
            this.setState((prevState) => {
                hours = parseInt(this.formatTime(prevState.hours + hours));

                if (hours > 99) {
                    hours = prevState.hours;
                }

                return ({ hours: this.formatTime(hours) });
            });
        }
    }

    setMinutes(minutes) {
        if (minutes < 0) {
            this.setState(() => ({ minutes: '00' }));
        } else {
            this.setState((prevState) => {
                minutes = parseInt(this.formatTime(prevState.minutes + minutes));

                if (minutes < 60) {
                    if (parseInt(minutes.toString()[0]) > 5) {
                        minutes = 59;
                    }
                } else if (minutes > 59) {
                    minutes = parseInt(minutes.toString().slice(minutes.toString().length - 1));
                }

                return ({ minutes: this.formatTime(minutes) });
            });
        }
    }

    setSeconds(seconds) {

        if (seconds < 0) {
            this.setState(() => ({ seconds: '00' }));
        } else {
            this.setState((prevState) => {
                seconds = parseInt(this.formatTime(prevState.seconds + seconds));

                if (seconds < 60) {
                    if (parseInt(seconds.toString()[0]) > 5) {
                        seconds = 59;
                    }
                } else if (seconds > 59) {
                    seconds = parseInt(seconds.toString().slice(seconds.toString().length - 1));
                }

                return ({ seconds: this.formatTime(seconds) });
            });
        }
    }

    formatTime(time) {
        time = parseInt(time);
        return time < 10 ? '0' + time : time.toString().slice(time.toString().length - 2);
    }


    // HANDLE CONTROLS


    canStart() {

        this.setState((prevState) => ({
            canStart: prevState.status !== 'STARTED' && (parseInt(prevState.hours) > 0
                || parseInt(prevState.minutes) > 0
                || parseInt(prevState.seconds) > 0)
        }));
    }

    handleControlsStart() {
        this.startTimer();
    }

    startTimer() {
        if (this.state.status !== 'STARTED') {

            this.setState(() => ({ status: 'STARTED' }));

            const totalMilliseconds = ((parseInt(this.state.hours) * 60 * 60)
                + (parseInt(this.state.minutes) * 60)
                + parseInt(this.state.seconds))
                * 1000;

            this.setState(() => ({ timeInterval: parseInt(totalMilliseconds) }));

            this.interval = setInterval(() => {

                this.setState((prevState) => ({ timeInterval: prevState.timeInterval - 10 }));

                if (this.state.timeInterval === 0) {
                    clearInterval(this.interval);
                    this.setState(() => ({ status: null }));
                }
            }, 10);
        }
    }

    handleControlsStop() {
        if (this.state.status === 'STARTED') {
            clearInterval(this.interval);
            this.setState(() => ({ status: 'STOPPED' }));
        }
    }

    handleControlsResume() {
        if (this.state.status === 'STOPPED') {
            this.interval = setInterval(() => {

                this.setState((prevState) => ({
                    status: 'STARTED',
                    timeInterval: prevState.timeInterval - 10
                }));

                if (this.state.timeInterval === 0) {
                    clearInterval(this.interval);
                    this.setState(() => ({ status: null }));
                }
            }, 10);
        }
    }

    handleControlsReset() {
        clearInterval(this.interval);
        this.setState(() => ({ status: null, timeInterval: null }));
    }


    // RENDER


    render() {
        return (
            <div className="timer">
                <Display onFocusChange={this.handleDisplayFocusChange}
                    hours={this.state.hours}
                    minutes={this.state.minutes}
                    seconds={this.state.seconds}
                    timeInterval={this.state.timeInterval} />

                <Keypad onClick={this.handleKeypadClick} status={this.state.status} />

                <Controls onStart={this.handleControlsStart}
                    onStop={this.handleControlsStop}
                    onResume={this.handleControlsResume}
                    onReset={this.handleControlsReset}
                    canStart={this.state.canStart}
                    status={this.state.status} />
            </div>
        );
    }
}

const Header = (props) => (
    <nav className="header navbar navbar-dark bg-dark">
        <div className="container">
            <div className="row m-auto">
                <i className="fa fa-hourglass-half fa-3x text-white my-auto"></i>
                <div className="h2 ml-3 my-auto text-light" href="/">{props.title}</div>
            </div>
        </div>
    </nav>
);

Header.defaultProps = {
    title: 'Title'
};

Header.propTypes = {
    title: PropTypes.string
};
const Display = (props) => {

    const time = new Time();

    return (
        <div>
            {
                props.timeInterval && (
                    <div className="display-countdown">
                        <div>
                            <label type="text" className="display-countdown-label">H</label>
                            <label type="text" className="display-countdown-label">M</label>
                            <label type="text" className="display-countdown-label">S</label>
                            <label type="text" className="display-countdown-label">MS</label>
                        </div>
                        <div className="display-countdown-time">
                            {time.getTime(props.timeInterval)}
                        </div>
                    </div>
                )
            }

            {!props.timeInterval &&
                <div className="display">
                    <div>
                        <div>
                            <label type="text" className="display-label">H</label>
                            <label type="text" className="display-label">M</label>
                            <label type="text" className="display-label">S</label>
                        </div>

                        <div className="input-group input-group-lg display-input-group">
                            <input type="text"
                                className="form-control display-time display-hours"
                                maxLength="2"
                                placeholder="00"
                                onFocus={() => props.onFocusChange('HH')}
                                value={props.hours}
                                onChange={props.onInputChange} />

                            <span className="display-time display-separator">:</span>

                            <input type="text"
                                className="form-control display-time display-minutes"
                                maxLength="2"
                                placeholder="00"
                                onFocus={() => props.onFocusChange('MM')}
                                value={props.minutes}
                                onChange={props.onInputChange} />

                            <span className="display-time display-separator">:</span>

                            <input type="text"
                                className="form-control display-time display-seconds"
                                maxLength="2"
                                placeholder="00"
                                onFocus={() => props.onFocusChange('SS')}
                                value={props.seconds}
                                onChange={props.onInputChange} />
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

Display.defaultProps = {
    onFocusChange: input => console.log(input),
    onInputChange: () => { },
    hours: '00',
    minutes: '00',
    seconds: '00',
    timeInterval: null
};

Display.propTypes = {
    onFocusChange: PropTypes.func,
    onInputChange: PropTypes.func,
    hours: PropTypes.string,
    minutes: PropTypes.string,
    seconds: PropTypes.string,
    timeInterval: PropTypes.number
};
const Keypad = (props) => (
    <div>
        <div></div>
        {
            props.status === null &&
            <div className="keypad">
                <div className="keypad-row">
                    <button className="btn btn-light btn-sm" onClick={() => props.onClick(1)}>1</button>
                    <button className="btn btn-light btn-sm" onClick={() => props.onClick(2)}>2</button>
                    <button className="btn btn-light btn-sm" onClick={() => props.onClick(3)}>3</button>
                </div>

                <div className="keypad-row">
                    <button className="btn btn-light btn-sm" onClick={() => props.onClick(4)}>4</button>
                    <button className="btn btn-light btn-sm" onClick={() => props.onClick(5)}>5</button>
                    <button className="btn btn-light btn-sm" onClick={() => props.onClick(6)}>6</button>
                </div>

                <div className="keypad-row">
                    <button className="btn btn-light btn-sm" onClick={() => props.onClick(7)}>7</button>
                    <button className="btn btn-light btn-sm" onClick={() => props.onClick(8)}>8</button>
                    <button className="btn btn-light btn-sm" onClick={() => props.onClick(9)}>9</button>
                </div>

                <div className="keypad-row">
                    <button className="btn btn-light btn-sm" onClick={() => props.onClick(-1)}>
                        <i className="fa fa-close"></i>
                    </button>

                    <button className="btn btn-light btn-sm" onClick={() => props.onClick(0)}>0</button>

                    <button className="btn btn-light btn-sm">&nbsp;</button>
                </div>
            </div>
        }
    </div>
);

Keypad.defaultProps = {
    onClick: (e) => console.log(e),
    status: null
};

Keypad.propTypes = {
    onClick: PropTypes.func,
    status: PropTypes.string
};
const Controls = (props) => (
    <div>
        <div className="controls">
            {
                props.status !== 'STARTED' &&
                props.status !== 'STOPPED' &&
                <button className="btn btn-success btn-lg btn-block"
                    onClick={props.onStart}
                    disabled={!props.canStart}>
                    START
                </button>
            }
            {
                (props.status === 'STARTED' || props.status === 'STOPPED') &&
                <div className="controls">
                    {
                        props.status === 'STARTED' &&
                        <button className="btn btn-danger btn-lg"
                            onClick={props.onStop}>
                            STOP
                        </button>
                    }
                    {
                        props.status === 'STOPPED' &&
                        <button className="btn btn-success btn-lg"
                            onClick={props.onResume}>
                            RESUME
                        </button>
                    }
                    <button className="btn btn-primary btn-lg"
                        onClick={props.onReset}>
                        RESET
                    </button>
                </div>
            }
        </div>
    </div>
);

Controls.defaultProps = {
    onStart: () => console.log('CONTROLS: START'),
    onStop: () => console.log('CONTROLS: STOP'),
    onResume: () => console.log('CONTROLS: RESUME'),
    onReset: () => console.log('CONTROLS: RESET'),
    canStart: false,
    status: null
};

Controls.propTypes = {
    onStart: PropTypes.func,
    onStop: PropTypes.func,
    onReset: PropTypes.func,
    onResume: PropTypes.func,
    canStart: PropTypes.bool,
    status: PropTypes.string
};

ReactDOM.render(<App/>,document.getElementById("app"))