import React from "react";
import { Images } from "../Images/Images";

//Погода
export function Weather({number, text}) {
    return (
        <div>
            <h3>Погода</h3>
            <Images/>
            {number}
            {text}
        </div>
    )
}