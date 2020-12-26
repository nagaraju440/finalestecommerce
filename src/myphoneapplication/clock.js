import React from 'react';
// import './routers.css';

class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state={
            time :new Date().toLocaleTimeString(),
            date:new Date().toLocaleDateString(),
        }

    }
    componentDidMount() {
        this.intervalID = setInterval(
          () => this.tick(),
          1000
        )}
    tick=function(){
        this.setState({
            time:new Date().toLocaleTimeString(),
        });
    }
    render(){
             return(
                <div>
                <div className="container black1">
                <div className="centeralaram">Clock</div>
                    <div className="clocktime">{this.state.time}</div>
                    <div className="clocktime">{this.state.date}</div>
                    <div className="clocktime">Have A Good Day🙂</div>
                </div>
            </div>
             )
    }
}

export default Clock;