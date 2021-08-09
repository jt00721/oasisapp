import React from 'react';

function Studyroom() {
        return (
            <div className="StudyRooms">
                <div className="container" id="studyroom-text">
                    <div className="studyroom-title" id="studyroom-title">
                        <h3>Study Rooms</h3>
                    </div>
                    <div id="studyroom-description">
                        <p>Study In Our 24/7 Virtual Study Rooms With Other Students From Around The Globe.<br/>Join The Oasis Student Community.</p>
                    </div>
                    <div className="container" id="center-icons">
                        <span>
                            <img src="/Icon-awesome-laptop@2x.png" style={{marginRight: '50px'}} />
                            <img src="/Icon-awesome-umbrella-beach@2x.png" />
                        </span>
                    </div>
                    <div className="study-rooms">
                        <h4>High School Students</h4>
                    </div>
                    
                    <div className="container" style={{display: 'flex'}}>
                        <span className="center-image">
                            <a href="/studyrooms/highschoolroom1">
                                <img src="/studyroom1-icon@2x.png"/>
                            </a>
                        </span>
                        <span className="center-image">
                            <a href="/studyrooms/highschoolroom2">
                                <img src="/studyroom2-icon@2x.png"/>
                            </a>
                        </span>
                        <span className="center-image">
                            <a href="/studyrooms/highschoolroom3">
                                <img src="/studyroom3-icon@2x.png"/>
                            </a>
                        </span>
                    </div>
                    <div className="study-rooms">
                        <h4>University Students & Beyond</h4>
                    </div>
                    <div className="container" style={{display: 'flex'}}>
                        <span className="center-image">
                            <a href="/studyrooms/universityroom1">
                                <img src="/studyroom1-icon@2x.png"/>
                            </a>
                        </span>
                        <span className="center-image">
                            <a href="/studyrooms/universityroom2">
                                <img src="/studyroom2-icon@2x.png"/>
                            </a>
                        </span>
                        <span className="center-image">
                            <a href="/studyrooms/universityroom3">
                                <img src="/studyroom3-icon@2x.png"/>
                            </a>
                        </span>
                    </div>
                </div>

                <hr></hr>
            </div>
        );
}

export default Studyroom