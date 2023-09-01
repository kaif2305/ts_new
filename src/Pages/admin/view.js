
import React from "react";
import { useEffect, useState } from 'react';

import axios from "axios";

export default function View() {
  const [data, setData] = useState()


  useEffect(() => {
    const fetchData = async () => {

      try {

        const response = await axios.get('https://api.technoscape.in/admin/view');
        console.log("this ran")

        console.log(response.data)

        setData(response.data)
      } catch (err) {
        console.log("Error in fetching the data", err);
      }
    }
    fetchData();

  }, [])



  return (
    <div>
      <h1>Abstract Submition</h1>
      <table className="table">
        <thead>
          <tr>
            <th>UId</th>

            <th>Name</th>
            <th>Email Id</th>
            <th>PDF File</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map(entry => (
            <tr key={entry._id}>
              <td>{entry._id}</td>
              <td>{entry.title + " " + entry.firstName + " " + entry.lastName}</td>
              <td>
                {entry.email && (
                  <a href={`mailto:` + entry.email}>
                    {entry.email}
                  </a>
                )}
              </td>
              <td>
                {entry.uploadedAbstract && (
                  <a href={entry.uploadedAbstract} target="_blank" rel="noopener noreferrer">
                    PDF
                  </a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  )
}


