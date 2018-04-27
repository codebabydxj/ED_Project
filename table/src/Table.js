import React, { Component } from "react";
import { css } from "glamor";
import Papa from "papaparse";

const TABLE_STYLE = css({
  width: "500px",
  height: "300px",
  border: "1px solid #999",
  margin: "0 auto",
  "> #table": {
    width: "100%"
    // height: "100%"
  },
  "> #table caption": {
    lineHeight: "50px",
    fontWeight: "bold",
    borderBottom: "1px solid #999"
  },
  "> #table tr": {
    textAlign: "center"
  },
  "#tbody": {
    height: "100px"
  },
  "> #table th": {
    border: "1px soild #999"
  },
  "> #button": {
    width: "100%",
    height: "50px",
    marginTop: "120px",
    borderTop: "1px solid #999",
    textAlign: "center",
    fontSize: "24px",
    lineHeight: "50px",
    cursor: "pointer"
  }
});

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: []
    }
  }

  getData() {
    Papa.parse("./test.csv", {
      download: true,
      complete: (results)=> {
        console.log(results.data);
        this.setState({
          listItems:results.data
        })
      }
    });
  }

  render() {
    return (
      <div {...TABLE_STYLE}>
        <table id="table">
          <caption>CSV_DATA</caption>
          <thead>
            <tr>
              <th>data1</th>
              <th>data2</th>
              <th>data3</th>
              <th>data4</th>
              <th>data5</th>
            </tr>
          </thead>
          <TableTlist listItems={this.state.listItems}/>
        </table>
        <div id="button" onClick={this.getData.bind(this)}> 获取数据 </div>
      </div>
    );
  }    
}

class TableTlist extends Component {
  getTableTd(data){
    return data.map((m,i)=>{
      return(
        <td key={i}>
            {m}
        </td>
      )
    })
    
  }
  render() {
    const { listItems } = this.props;
    return(
      <tbody id="tbody">
        {listItems.map((d,i)=>{
          return (
            <tr key={i}>
              {this.getTableTd(d)}
            </tr>
          )
        })}
      </tbody>
    )
  }
}

export default Table;
