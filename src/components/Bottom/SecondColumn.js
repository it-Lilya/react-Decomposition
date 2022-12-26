import React from "react";
import {Map} from './Map';
import { Programm } from "./Programm";


//Вторая колонка нижней части(картыб телепрограмма)
export function SecondColumn() {
return (
    <div>
            <Map />
            <Programm />
        </div>
)

}