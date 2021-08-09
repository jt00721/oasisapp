import React from 'react';
import Link from 'next/link';

function Resources() {
        return (
            <div>
                <div className="container" id="resources-text">
                        <div id="resources-title">
                            <h3>Resources</h3>
                        </div>
                        <div id="resources-description">
                            <p>Use Our Study Resources To Access Information That Will Aid Your Learning Experience.<br/>Join The Oasis Student Community.</p>
                        </div>
                        
                        <div className="container" style={{display: 'flex'}}>
                            <span className="center-image">
                                <a href="https://studywise.co.uk/">
                                    <img src="/resources1-icon@2x.png"/>
                                </a>
                            </span>
                            <span className="center-image">
                                <a href="https://quizlet.com/">
                                    <img src="/resources2-icon@2x.png"/>
                                </a>
                            </span>
                            <span className="center-image">
                                <a href="https://www.bbc.co.uk/bitesize">
                                    <img src="/resources3-icon@2x.png"/>
                                </a>
                            </span>
                        </div>
        
                        <div className="container" style={{display: 'flex'}}>
                            <span className="center-image">
                                <a href="https://quillbot.com/">
                                    <img src="/resources4-icon@2x.png"/>
                                </a>
                            </span>
                            <span className="center-image">
                                <a href="https://www.grammarly.com/">
                                    <img src="/resources5-icon@2x.png"/>
                                </a>
                            </span>
                            <span className="center-image">
                                <a href="http://www.lifehacker.co.uk/">
                                    <img src="/resources6-icon@2x.png"/>
                                </a>
                            </span>
                        </div>

                        <div className="container" style={{display: 'flex'}}>
                            <span className="center-image">
                                <a href="https://mentalfloss.com/">
                                    <img src="/resources7-icon@2x.png"/>
                                </a>
                            </span>
                            <span className="center-image">
                                <a href="http://sleepyti.me/">
                                    <img src="/resources8-icon@2x.png"/>
                                </a>
                            </span>
                            <span className="center-image">
                                <a href="http://keepmeout.com/en/">
                                    <img src="/resources9-icon@2x.png"/>
                                </a>
                            </span>
                        </div>
                    </div>

                    <hr/>
            </div>
        );
}

export default Resources