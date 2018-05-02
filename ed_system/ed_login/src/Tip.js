import React, { Component } from 'react';
import { css } from 'glamor';

const STYLE_CSS = css({
    width: '340px',
    height: '35px',
    margin: '100px 0 0 50px',
    position: 'relative',
    '> .tip': {
        width: '338px',
        height: '33px',
        background: '#FFFFFF',
        border: 'none',
        outline: 'none',
        borderRadius: '3px',
        textAlgin: 'center',
        lineHeight: '33px',
        fontFamily: '',
        fontSize: '13px',
        color: '#444444',
        letterSpacing: '0',
        padding: '0',
        paddingLeft: '10px',
    },
    '> .errTip': {
        background: 'rgba(255,85,0,0.10)',
        border: '1px solid #FF5500',
    },
    '> .tipText': {
        height: '23px',
        padding: '0 10px',
        background: '#FF5500',
        borderRadius: '2px',
        textAlgin: 'center',
        lineHeight: '21px',
        position: 'absolute',
        right: '-10px',
        top: '-23px'
    },
    '> .tipText > .warn': {
        fontFamily: '',
        fontSize: '11px',
        color: '#FFFFFF',
        letterSpacing: '0',
        textAlign: 'center'
    },
    '> .tipText > .triangle': {
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
                <input type="text" name="" className="tip errTip"/>
                <div className="tipText">
                    <span className="warn">Enter a viald Day</span>
                    <div className="triangle"></div>
                </div>
            </div>
        )
    }
}

export default Tip;