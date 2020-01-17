import React from "react";
import Count from "./Count";
import Buttons from "./Buttons";

export default function Card() {
    return (
        <div className="card">
            <img src="https://picsum.photos/400/400" className="card-img-top" alt="..." />
            <Count />
            <div className="card-body" >
                <Buttons />
            </div>
        </div>
    );
}