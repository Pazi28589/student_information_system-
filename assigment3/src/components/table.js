import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Profile from "./profile";
import { useState } from "react";

export default function TableCreate(props) {
  const [item, setitem] = useState(props.students[0]);

  return (
    <>
      <div className="outerDiv">
        <div className="leftDiv">
          {" "}
          <Table  striped bordered >
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Course</th>
                <th>Country</th>
                <th>Profile</th>
              </tr>
            </thead>
            <tbody>
              {props.students.map((item, index) => (
                <tr key={index}>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.course}</td>
                  <td>{item.address.country}</td>
                  <td>
                    <button onClick={() => setitem(item)}>view</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div className="rightDiv">
          <Profile student={item} />
        </div>
      </div>
    </>
  );
}
