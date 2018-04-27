import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { css } from "glamor";
import Table from './Table';

const ROOT_STYLE = css({
  width: "200px",
  height: "50px",
  border: "1px solid #999",
  position: "relative",
  textAlign: "center",
  lineHeight: "50px",
  color: "#666",
  margin: "0 auto",
  "> #input": {
    width: "100%",
    height: "100%",
    position: "absolute",
    left: "0",
    top: "0",
    opacity: "0"
  },
  "> img": {
    width: "100%",
    height: "100%"
  }
});

class Hello extends Component {
  fileType(e) {
    let name = e.target.value;
    console.log(name);
    let fileName = name.substring(name.lastIndexOf(".") + 1).toLowerCase();
		console.log(fileName);
		if(fileName !== "csv") {
			alert("请选择csv格式文件上传！");
			name = "";
			return;
		} else {
      ReactDOM.render(
        <Table />,
        document.getElementById('root')
      );
    }
  }
  
  render() {
    return (
      <div {...ROOT_STYLE}>
        选择文件
        <input type="file" name="file" id="input" value="" multiple="multiple" onChange={this.fileType}/>
        <img src="/images/a.jpg" alt=""/>
        {/* <Table /> */}
      </div>
    );
  }
}

export default Hello;


