import React from "react";

import { Link } from "react-router-dom";


const FooterScores = ({handleIncrement}) => {

    return (
        <div className="result-footer">
            <Link to="/">
                <button className="skip-button" onClick={handleIncrement} type="button" href="/">Play Again</button>
            </Link>
        </div>
    )
}

export default FooterScores;