import React from "react";

//Телепрограмма
export function Programm({list}) {
    return ( 
        <div>
            <div>
            <h3>Телепрограмма</h3>
            <button>Эфир</button>
            </div>
            <ul>
                {list.map((l) => (
                    <li key={l.id}>
                        <p>{l.date}</p>
                        <p>{l.heading}</p>
                        <p>{l.info}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}