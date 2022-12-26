import React from "react";

//Посещаемое
export function Visited({list}) {
    <div>
        <h3>Посещаемое</h3>
    <ul>
        {list.map((l) => (
            <li key={l.key}>
                <h5>{l.heading} -</h5>
                <p>{l.text}</p>
             </li>
    ))}
     </ul>
     </div>
}