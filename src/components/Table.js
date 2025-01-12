import React, { useState } from "react";

const data = [
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" }
];

const Table = () =>{
    const [tableData, setTableData] = useState(data);
    return(
        <div>
            <h1>Date and Views Table</h1>
            <button>Sort by Date</button>
            <button>Sort by Views</button>
            <table>
                <thead>
                    <tr>
                    <td>Date</td>
                    <td>Views</td>
                    <td>Article</td>
                    </tr>               
                </thead>
                {tableData.map((ele,idx)=>(
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
    )
}
export default Table;