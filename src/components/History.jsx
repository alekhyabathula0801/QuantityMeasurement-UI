import React from "react";

function History(props) {
  console.log("in history")
  var tableBody = props.historyData.map((data) => {
    return (
      <tr>
        {Object.values(data).map((cell) => {
          return <td>{cell}</td>;
        })}
      </tr>
    );
  });
  var tableHeader = (
    <tr>
      <th>UNIT</th>
      <th>VALUE</th>
      <th>REQUIRED UNIT</th>
      <th>RESULT</th>
    </tr>
  );
  return (
    <div className="history">
      <div id="welcome-history">History</div>
      <table id="history-table">
        <thead>{tableHeader}</thead>
        <tbody>{tableBody}</tbody>
      </table>
    </div>
  );
}

export default History;
