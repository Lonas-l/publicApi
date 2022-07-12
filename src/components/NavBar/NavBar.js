import React from "react";
import {Link} from "react-router-dom";
import "./NavBar.css"

export default function NavBar () {
    return (
        <div className={'NavBar'}>
            <ul className={'NavBar__list'}>
                <li className={'NavBar__item'}>
                    <Link to={'/app'}>Main Page</Link>
                </li>
                <li className={'NavBar__item'}>
                    <Link to={'/api/wordGenerator'}>First API</Link>
                </li>
            </ul>
        </div>
    );
}