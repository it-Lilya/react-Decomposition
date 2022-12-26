import React from "react";
import {Images} from '../Images/Images';
import { Body } from "../Body";
import { TopCap } from "../Top/TopCap";
import { GeneralSearch } from "../GeneralSearch";
import { MovieAdvertisement } from "../MovieAdvertisement";
import { BottomCap } from "../Bottom/BottomCap";

//сборка всех компонентов
export default function General() {
    return (
        <div className="container">
            <Images />
            <Body>
                <TopCap />
                <GeneralSearch />
                <MovieAdvertisement />
                <BottomCap />
            </Body>
        </div>
    )
}