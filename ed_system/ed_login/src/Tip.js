import React, { Component } from 'react';
import { css } from 'glamor';

const STYLE_CSS = css({
    margin: '100px 0 0 50px',
    '> #tip': {
        width: '338px',
        height: '33px',
        background: 'rgba(255,85,0,0.10)',
        border: '1px solid #FF5500',
        borderRadius: '3px',
        textAlgin: 'center',
        lineHeight: '33px',
        position: 'relative'
    },
    '> #tip > span': {
        fontFamily: '',
        fontSize: '13px',
        color: '#444444',
        letterSpacing: '0',
        paddingLeft: '10px'
    },
    '> #tip > .tipText': {
        height: '23px',
        padding: '0 10px',
        background: '#FF5500',
        borderRadius: '2px',
        textAlgin: 'center',
        lineHeight: '21px',
        position: 'absolute',
        right: '0',
        top: '-24px'
    },
    '> #tip .warn': {
        fontFamily: '',
        fontSize: '11px',
        color: '#FFFFFF',
        letterSpacing: '0',
        textAlign: 'center'
    },
    '> #tip .triangle': {
        width: '6.6px',
        height: '6.6px',
        transform: 'rotate(45deg)',
        background: '#FF5500',
        position: 'absolute',
        right: '15px',
        bottom: '-3px'
    }
})

class Tip extends Component {
    render() {
        return (
            <div { ...STYLE_CSS }>
                <div id="tip">
                    <span>1066</span>
                    <div className="tipText">
                        <span className="warn">Enter a viald Day</span>
                        <div className="triangle"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tip;