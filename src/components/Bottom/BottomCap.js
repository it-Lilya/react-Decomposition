import React from "react";
import { FirstColumn } from "./FirstColumn";
import { SecondColumn } from "./SecondColumn";
import { Ether } from "./ether";

//Нижняя часть тела(погода, карта, эфир)
export function BottomCap() {
    return (
        <div>
           <FirstColumn />
           <SecondColumn />
            <Ether />
        </div>
    )
}