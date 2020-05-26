import React from "react";
import FooterScores from "../Game/FooterScore/";


const Scores = ({ score }) => (
    <>
        <section className="find-gallery">
            <h2>Your Score:</h2>
            <h2>{score} out of 10</h2>
            
            <figure className="photo">
                <picture>
                {score >= 5 ?
                    <img className="finish-img" src="https://github.com/HenryTaylor2019/team-alpha-frontend/blob/2a6e9771eaf98f486d1b990a7ceb4c44963cd4ef/src/Atomic/img/congratulations.jpg?raw=true" alt="congratulations"/>
                    :
                    <img className="finish-img" src="https://cdn.pixabay.com/photo/2017/06/30/19/52/apocalypse-2459465_960_720.jpg" alt="congratulations"/>
                }
                </picture>
            </figure>

            {score >= 5 ? 
            <div>
            <h1 className="yellow h3">Congratulations </h1>
            <p className="score-text">Your speed and perception has helped stop the pandemic escalating. After saving the human race you stand in a field of maize with your arms raised triumphantly as the sun sets... </p>
            </div>
            :
            <div>
            <h1 className="red h3">Failed</h1>
            <p className="score-text">Your inability to spot basic hazards has led to the spread of the pandemic and the destruction of the species.</p> 
            <p className="score-text">Better luck next time...</p>
            </div>
            }

        </section>



        <FooterScores />
    </>
);

export default Scores;