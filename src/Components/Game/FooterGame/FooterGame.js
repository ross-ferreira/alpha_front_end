import React from "react";
import { Link } from 'react-router-dom';



const FooterGame = ({ handleIncrement, counter }) => {

  return (
    <>

      <div className="footer-div ">

        {counter === 10 ?
          <Link to="/scores">
            <button type="button" className="skip-button">Skip Round</button>
          </Link>
          :
          <button type="button" className="skip-button" onClick={handleIncrement}>Skip Round</button>
        }
        <p className="card-footer">	&#169;Group Alpha, 2020 </p>	
      </div>
    </>
  )
}

export default FooterGame;