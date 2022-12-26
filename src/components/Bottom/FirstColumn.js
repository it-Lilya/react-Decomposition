import React from "react";
import { Weather } from "./Weather";
import { Visited } from "./Visited";

//Первая колонка нижней части(погода, посещаемое)
export function FirstColumn() {
    return (
        <div>
            <Weather />
            <Visited />
        </div>
    )
}