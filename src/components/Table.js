import React, { useState } from "react";

const data = [
  { date: "2022-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-02", views: 150, article: "Article 2" },
  { date: "2023-09-02", views: 120, article: "Article 3" },
  { date: "2020-09-03", views: 200, article: "Article 4" },
];

const Table = () => {
  const [tableData, setTableData] = useState(data);

  function handleDateSort(){
    const sortByDate = [...tableData].sort((a,b)=>{
        const dateDiff = new Date(b.date) - new Date(a.date);
        if(dateDiff !== 0 ){
            return dateDiff;
        }else{
            return b.views - a.views;
        }
    });
    setTableData(sortByDate);
  }

  function handleViewsSort(){
    const sortByView = [...tableData].sort((a,b)=> {
        const viewDiff = b.views - a.views;
        if(viewDiff !== 0){
            return viewDiff;
        }else{
            return new Date(b.date) - new Date(a.date);
        }
    });
    setTableData(sortByView);
  }
  return (
    <div>
      <h1>Date and Views Table</h1>
      <button onClick={handleDateSort}>Sort by Date</button>
      <button onClick={handleViewsSort}>Sort by Views</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        {tableData.map((ele) => (
          <tbody>
            <tr>
              <td>{ele.date}</td>
              <td>{ele.views}</td>
              <td>{ele.article}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};
export default Table;
