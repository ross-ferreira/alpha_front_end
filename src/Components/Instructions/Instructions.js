import React, { Component } from "react";
import { Link } from "react-router-dom";
import FooterInstructions from "./FooterInstructions";

class Instructions extends Component {
    render() {
        return (
            <>
                <div class="next">

                    <section class="first-page resolution intro-text">

                        <h3 className="text-title">Instructions</h3>
                        <p class="text">In order to survive a pandemic, you will need to confidently and quickly spot potential hazards in your day to day life. This game will test your skills in hazard percetion and will help stop a virus spreading globally and wiping out humankind.</p>

                        <h3 className="text-title">The Rules</h3>
                        <ul>
                            <li class="text">
                                There is one hazard per page
                            </li>
                            <li class="text">
                                Click on the hazard in the photo before the time runs out
                            </li>
                            <li class="text">
                                There are 10 photos in each test
                            </li>
                            <li class="text">
                                When you are ready, click the button below to start.
                        </li>
                        </ul>

                        <form className="form-check" action="/action_page.php">
                            <h5>Select Difficulty:</h5>
                            <input className="form-check-input" type="radio" id="Feeling Whimpy" name="difficulty" value="Feeling Whimpy" />
                            <label class="form-check-label" for="Feeling Whimpy"> Feeling Whimpy</label><br />
                            <input className="form-check-input" type="radio" id="Feeling Confident" name="difficulty" value="Feeling Confident" />
                            <label class="form-check-label" for="Feeling Confident"> Feeling Confident</label><br />
                            <input className="form-check-input" type="radio" id="Duke Nukem" name="difficulty" value="Duke Nukem" />
                            <label class="form-check-label" for="Duke Nukem"> Duke Nukem</label>
                        </form>

                        <div class="button-wrapper">
                            <Link to="/gamepage">
                                <button class="begin-button" onclick="">Begin Test</button>
                            </Link>
                        </div>
                    </section>
                    <section class="find-gallery photo-main resolution">

                        <img class="first-page" src="https://github.com/HenryTaylor2019/team-alpha-frontend/blob/f60dbd549c0258a4c803d97b870ec98872d5af03/src/Atomic/img/pandemic.png?raw=true" alt="pandemic Logo"></img>

                    </section>

                </div>
                <FooterInstructions />
            </>
        );
    }
}

export default Instructions;