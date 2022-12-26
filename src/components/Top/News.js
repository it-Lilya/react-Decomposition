import React from "react";
import Moment from "react-moment";
import { List } from "../List";

// Новости
export function News({props}) {
    return (
        <div className="news-headline">
            <ul>
            {props.headline.map((o) => (
                <li className="header" key={o.id}>
                    <button>{o.text}</button>
                </li>))}
                <Moment format='MM-DD, HH:mm' interval={1000} />
            </ul>
                <List>
                    <ul className="currency">
                    {props.currency.map((c) => (
                        <li key={c.key}>
                            <div>
                                {c.name}
                                {c.meaning}
                                {c.difference}
                            </div>    
                        </li>    
                    ))}
                    <button>...</button>
                </ul>
                </List>
        </div>
    )
}