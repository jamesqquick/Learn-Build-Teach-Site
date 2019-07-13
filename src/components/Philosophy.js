import React, { Component } from 'react'
import {StyledPhilosophy} from "../elements/Philosophy";
import meCirlce from "../images/me-circle.png";
export default class Philosophy extends Component {
    render() {
        return (
            <StyledPhilosophy id="philosophy">
                <div className="philosophy-content">
                    <div className="bullets-container">
                        <div className="bullet">
                            <h1>LEARN</h1>
                            <p> the tech.</p>
                        </div>
                        <div className="bullet">
                            <h1>BUILD</h1>
                            <p> something cool.</p>
                        </div>
                        <div className="bullet">
                            <h1>TEACH</h1>
                            <p> it to others.</p>
                        </div>
                    </div>
                        
                        
                    <img id="profilePic" alt="James Q Quick circle image" src={meCirlce}/>
                </div>
                <p>Hi! I’m <strong>James Q Quick</strong>, the founder of <strong>Learn Build Teach</strong>. I am a self-taught Web Developer with a desire to learn and a passion for teaching. I want to share that passion with you on this platform!</p>
                <br></br>
                <br></br>

                <p>Interested in content updates? <a href="https://peerreviews.dev/">Sign up here</a>.</p>
            </StyledPhilosophy>
        )
    }
}
