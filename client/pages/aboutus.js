import React from 'react';

function Aboutus() {
        return (
            <div>
                <div className="container" id="aboutus-text">
                        <div id="aboutus-title">
                            <h3>About Us</h3>
                        </div>
                        <div id="aboutus-description">
                            <p>Oasis Is A Platform Where Students Can Meet And Study With Other Students From All Over The Globe.<br/>Created To Aid Students Achieve Their Academic Goal During The Pandemic.<br/>Join The Oasis Student Community.</p>
                        </div>
                        
                        <div className="container" style={{display: 'flex'}}>
                            <span className="center-image">
                                <img src="/aboutus1-icon@2x.png"/>
                            </span>
                            <span className="center-text" id="studyrooms-text">
                                <p>Use our virtual study rooms to meet and study<br/>with other students.</p>
                            </span>
                        </div>
        
                        <div className="container" style={{display: 'flex'}}>
                            <span className="center-text" id="studytools-text">
                                <p>Our study tools help improve students’ learning<br/>experiences.</p>
                            </span>
                            <span className="center-image">
                                <img src="/aboutus2-icon@2x.png"/>
                            </span>
                        </div>

                        <div className="container" style={{display: 'flex'}}>
                            <span className="center-image">
                                <img src="/aboutus3-icon@2x.png"/>
                            </span>
                            <span className="center-text" id="resources-text">
                                <p>Our resources provide students with access to a<br/>large amount of student related content.</p>
                            </span>
                        </div>
                    </div>

                    <hr></hr>
            </div>
        );
}

export default Aboutus