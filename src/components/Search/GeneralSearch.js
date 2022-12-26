import React from "react";
import {SearchSuggestions} from './SearchSuggestions';
import { Search } from "./Search";
import {SearchText} from './SearchText';

//Поиск и прилогающие элементы
export function GeneralSearch() {
    return (
        <div>
            {SearchSuggestions}
            {Search}
            {SearchText}
        </div>
    )
}