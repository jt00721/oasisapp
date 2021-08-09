import React from 'react';

function Mainpage() {
        return (
            <div>
                <div className="container">
                        <div className="row">
                            <div className="col-4">

                            </div>
                            <div className="col-8 main-page-text">
                                <h5>Study better</h5>
                                <span className="main-page-text">
                                    <h2>A better way<br/>to learn</h2>
                                </span>
                                <span className="main-page-text">
                                    <p>Discover an improved learning<br/>experience by studying with<br/>others virtually. Together you<br/>will achieve more.</p>
                                </span>
                            </div>
                        </div>
                        <div className="container main-page-text">
                            <h4>Featured</h4>
                        </div>
                    </div>

                    <div className="container">
                        <span className="center-image">
                            <a href="/studyrooms">
                                <img src="/StudyRoom@2x.png"/>
                            </a>
                        </span>
                        <span className="center-image">
                            <a href="/studytools">
                                <img src="/StudyTools@2x.png"/>
                            </a>
                        </span>
                        <span className="center-image">
                            <a href="/resources">
                                <img src="/Resources@2x.png"/>
                            </a>
                        </span>
                    </div>

                    <hr/>
            </div>
        );
}

export default Mainpage