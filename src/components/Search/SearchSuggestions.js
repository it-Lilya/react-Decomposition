import React from "react";

//Прдлодения для поиска(список)
export function SearchSuggestions({list}) {
    return (
        <ul>
            {list.map((l) => {
                <li>
                    <p>l.heading</p>
                </li>
                
            })}
            <button>Ещё</button>
        </ul>
    )
}