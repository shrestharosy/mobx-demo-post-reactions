import React from "react";
import ReactionsCount from "./Count";
import Buttons from "./Buttons";

export default function Card() {
    return (
        <div className="card">
            <img src="https://picsum.photos/400/400" className="card-img-top" alt="..." />
            <ReactionsCount />
            <div className="card-body" >
                <Buttons />
            </div>
        </div>
    );
}