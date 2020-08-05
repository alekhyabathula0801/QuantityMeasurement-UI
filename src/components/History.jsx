import React from "react";

function History(props) {
  console.log("in history")
  var tableBody = props.historyData.map((data,index) => {
    return (
      <tr key={index}>
        {Object.values(data).map((cell,index) => {
          return <td key={index}>{cell}</td>;
        })}
      </tr>
    );
  });
  var tableHeader = (
    <tr>
      <th>FROM UNIT</th>
      <th>FROM VALUE</th>
      <th>TO UNIT</th>
      <th>TO VALUE</th>
    </tr>
  );
  return (
    <div className="history">
      <div id="history-nav"><button onClick={props.clearHistory}>Clear History</button></div>
      <div id="history-table-div">
      <table id="history-table">
        <thead>{tableHeader}</thead>
        <tbody>{tableBody}</tbody>
      </table>
      </div>
    </div>
  );
}

export default History;
