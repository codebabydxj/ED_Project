import React, { Component } from 'react';
import { css } from 'glamor';
import Tip from './Tip';

const ROOT_STYLE = css({
  width: '100%',
  height: '100%',
  background: '#fff',
  '> #lang': {
    height: '17px',
    float: 'right',
    marginTop: '20px',
    marginRight: '20px',
    fontFamily: '',
    fontSize: '12px',
    color: '#9B9B9B',
    letterSpacing: '0',
    lineHeight: '17px',
    cursor: 'pointer'
  },
  '> #login': {
    width: '408px',
    height: '320px',
    position: 'absolute',
    left: '0',
    top: '0',
    right: '0',
    bottom: '0',
    margin: 'auto'
  },
  '> #login > span': {
    display: 'block',
    width: '270px',
    margin: '0 auto',
    textAlign: 'center',
    fontFamily: '', 
    fontSize: '20px',
    color: '#2F3E4E',
    letterSpacing: '0',
    lineHeight: '30px',
    marginBottom: '24px'
  },
  '> #login #loginArea': {
    width: '270px',
    height: 'auto',
    overflow: 'hidden',
    margin: '0 auto'
  },
  '> #login #loginArea input.entry': {
    width: '258px',
    height: '33px',
    background: '#F8F8F8',
    border: '1px solid #E6E6E6',
    borderRadius: '3px',
    fontFamily: '',
    fontSize: '13px',
    color: '#9B9B9B',
    letterSpacing: '0',
    paddingLeft: '10px',
    marginBottom: '8px',
    outline: 'none'
  },
  '> #login #loginArea input.choose': {
    width: '14px',
    height: '14px',
    float: 'left',
    borderRadius: '2px',
    background: '#F8F8F8',
    border: '1px solid #CCCCCC',
    marginRight: '10px',
    marginTop: '6px'
  },
  '> #login #loginArea span': {
    fontFamily: '',
    fontSize: '10px',
    color: '#9B9B9B',
    letterSpacing: '0'
  },
  '>#login #loginArea button': {
    width: '270px',
    height: '35px',
    color: '#fff',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    marginTop: '24px',
    textAlign: 'center',
    lineHeight: '35px',
    background: '#13364C',
    borderRadius: '3px'
  },
  '>#login #or': {
    width: '100%',
    height: '14px',
    marginTop: '16px',
    textAlign: 'center',
    lineHeight: '14px'
  },
  '>#login #or span': {
    fontFamily: '',
    fontSize: '12px',
    color: '#9B9B9B',
    letterSpacing: '0'
  },
  '>#login #or div': {
    width: '178px',
    border: '1px solid #E6E6E6'
  },
  '>#login #or div.left': {
    float: 'left',
    marginTop: '6px'
  },
  '>#login #or div.right': {
    float: 'right',
    marginTop: '6px'  
  },
  '>#login #otherLogin': {
    width: '268px',
    height: '33px',
    border: '1px solid #e6e6e6',
    borderRadius: '3px',
    margin: '0 auto',
    marginTop: '18px',
    fontFamily: '',
    fontSize: '13px',
    color: '#444444',
    letterSpacing: '0',
    textAlign: 'center',
    lineHeight: '35px',
    cursor: 'pointer',
    position: 'relative'
  },
  '>#login #otherLogin img': {
    display: 'block',
    width: '30px',
    height: '21px',
    position: 'absolute',
    left: '10px',
    top: '7px'
  }
})

 class Login extends Component {
  render() {
    return (
      <div { ...ROOT_STYLE }>
          <div id="lang">
            <span> EN </span>/ 
            <span> 繁 </span>/ 
            <span> 簡 </span>
          </div>
          <div id='login'>
            <span>Welcome to Esquel Twinkle</span>
            <div id="loginArea">
              <input type="text" name="" className="entry" placeholder="User ID"/>
              <input type="password" name="" className="entry" placeholder="Password"/>
              <input type="checkbox" name="" className="choose"/>
              <span>STAY LOGGED IN</span>
              <button>Login</button>
            </div>
            <div id="or">
              <div className="left"></div>
              <span>OR</span>
              <div className="right"></div>
            </div>
            <div id="otherLogin">
              <img src="./reference/esquel-logo-s.jpg" alt=""/>
              Using ESQUEL Login
            </div>
          </div>
          <Tip />
      </div>
    )
  }
}

export default Login;