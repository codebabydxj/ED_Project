import React, { Component } from 'react';
import './DialogTip.css';

class Dialog extends Component{
    constructor(props){
        super(props);
        this.state = {flag: true};
    }

    awaits(tipInfo) {
        return new Promise((resolve)=>{
            setTimeout(()=>{
                tipInfo.style.top = "-30px";
                tipInfo.style.animation = "tipUp ease-in 500ms";
                resolve(500);
             },2000)
        })
    }

    animationTip() {
        if(this.state.flag){
            this.setState({flag: false})
            let tipInfo = document.querySelector(".tipInfo");
            if(tipInfo !=null){
                tipInfo.style.top = "0px";
                tipInfo.style.animation = "tipDown ease-in 500ms";
                let tipCallback=this.awaits(tipInfo);
                tipCallback.then((timeout)=>{
                    setTimeout(()=>{
                        this.setState({flag:true})
                    },timeout)
                })
            }
        }
    }

    render() {
        return (
            <div className={this.props.statusType==='error'?'tipInfo error':this.props.statusType==='success'?'tipInfo success':''}>
                {this.props.content}
            </div>
        )
    }
}

export default Dialog;
