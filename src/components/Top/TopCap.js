import React from "react";
import {News} from './News';
import {Advertising} from './Advertising';

//Верхняя часть тела(новости, реклама)
export function TopCap() {
    return (
        <div>
            <News />
            <Advertising />
        </div>
    )
}