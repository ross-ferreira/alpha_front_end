import React from "react";



const FooterGame = ({ handleIncrement }) => {

    return(
      <>
        <div className="footer-div">
          <button type="button" className="skip-button" onClick={ handleIncrement }>Skip Round</button>
        </div>
        </>
    )
}

export default FooterGame;