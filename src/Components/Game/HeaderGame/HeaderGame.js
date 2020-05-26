import React from "react";
import CountDown from "../CountDown"


const Header = ({ counter, handleIncrement }) => {

    return (
        <>
            <div className="main-header">
                <div className="img-counter">

                    <p className="main-title">{counter}/10</p>
                </div>
                <div className="countdown-div">
                     <CountDown/>
                    </div>
                <h1 className="main-title">Hazard Perception</h1>
            </div>
        </>
    );

}

export default Header;
