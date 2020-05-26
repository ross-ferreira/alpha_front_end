import React, { Component } from "react";
import { Link } from "react-router-dom";
import FooterInstructions from "./FooterInstructions";

class Instructions extends Component {
    render() {
        return (
            <>
                <div className="next">

                    <section className="first-page resolution intro-text">

                        <div className="text-box">
                            <h3 className="text-title">Instructions</h3>
                            <p className="text">In order to survive a pandemic, you will need to confidently and quickly spot potential hazards in your day to day life. This game will test your skills in hazard percetion and will help stop a virus spreading globally and wiping out humankind.</p>
                        </div>
                        <div className="text-box">
                            <h3 className="text-title">The Rules</h3>
                            <ul>
                                <li className="text">1.There is one hazard per page </li>
                                <li className="text">2.Click on the hazard in the photo before the time runs out</li>
                                <li className="text">3.There are 10 photos in each test</li>
                                <li className="text">4.When you are ready, click the button below to start.</li>
                            </ul>
                        </div>
                        <div className="text-box">
                            <form className="diff-form" action="/action_page.php">
                                <h3>Select Difficulty:</h3>
                                <div className="difficulty-list">
                                    <input className="form-check-input" type="radio" id="Feeling Whimpy" name="difficulty" value="Feeling Whimpy" />
                                    <label className="form-check-label" htmlFor="Feeling Whimpy"> Feeling Whimpy</label><br />
                                    <input className="form-check-input" type="radio" id="Feeling Confident" name="difficulty" value="Feeling Confident" />
                                    <label className="form-check-label" htmlFor="Feeling Confident"> Feeling Confident</label><br />
                                    <input className="form-check-input" type="radio" id="Duke Nukem" name="difficulty" value="Duke Nukem" />
                                    <label className="form-check-label" htmlFor="Duke Nukem"> Duke Nukem</label>
                                </div>
                            </form>
                        </div>
                        <Link to="/gamepage">
                            <button className="begin-button" >Begin Test</button>
                        </Link>
                    </section>
                    <section className="find-gallery photo-main resolution">

                        <img className="first-page" src="https://github.com/HenryTaylor2019/team-alpha-frontend/blob/f60dbd549c0258a4c803d97b870ec98872d5af03/src/Atomic/img/pandemic.png?raw=true" alt="pandemic Logo"></img>

                    </section>

                </div>
                <FooterInstructions />
            </>
        );
    }
}

export default Instructions;