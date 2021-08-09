import React from 'react';
import Link from 'next/link';

function Studytools() {
        return (
            <div>
                <div className="container" id="studytools-text">
                        <div id="studytools-title">
                            <h3>Study Tools</h3>
                        </div>
                        <div id="studytools-description">
                            <p>Use Our Study Tools To Enhance And Support Your Individual And Group Study Learning Experience.<br/>Join The Oasis Student Community.</p>
                        </div>
                        
                        <div className="container" style={{display: 'flex'}}>
                            <span className="center-image">
                                <a href="https://todoist.com/productivity-methods/pomodoro-technique">
                                    <img src="/studytools1-icon@2x.png"/>
                                </a>
                            </span>
                            <span className="center-image">
                                <a href="https://www.rlf.org.uk/resources/how-to-read-sq3r/">
                                    <img src="/studytools2-icon@2x.png"/>
                                </a>
                            </span>
                            <span className="center-image">
                                <a href="https://www.retrievalpractice.org/why-it-works">
                                    <img src="/studytools3-icon@2x.png"/>
                                </a>
                            </span>
                        </div>
        
                        <div className="container" style={{display: 'flex'}}>
                            <span className="center-image">
                                <a href="https://medium.com/taking-note/learning-from-the-feynman-technique-5373014ad230">
                                    <img src="/studytools4-icon@2x.png"/>
                                </a>
                            </span>
                            <span className="center-image">
                                <a href="https://www.learningscientists.org/blog/2016/7/21-1">
                                    <img src="/studytools5-icon@2x.png"/>
                                </a>
                            </span>
                            <span className="center-image">
                                <a href="https://www.mindedge.com/learning-science/the-leitner-system-how-does-it-work/">
                                    <img src="/studytools6-icon@2x.png"/>
                                </a>
                            </span>
                        </div>
                    </div>

                    <hr></hr>
            </div>
        );
}

export default Studytools