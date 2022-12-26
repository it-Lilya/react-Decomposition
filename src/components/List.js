import React from "react";
import { Images } from "./Images/Images";

export function List({list}) {
    return (
        <ul>
            {list.map((l) => (
                <li key="l.id">
                    <Images />
                    <p>{l.text}</p>
                    <a href="#" />
                </li>
            ))}
        </ul>
    )
}