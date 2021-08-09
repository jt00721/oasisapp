import React from 'react';

import useScript from '../../hooks/use-script';

const Universityroom3 = props => {
    useScript('https://cdn.agora.io/sdk/release/AgoraRTCSDK-3.6.2.js')
    useScript('/js/oasis.universityroom3.js');


  // rest of your component
  return (
    <div>
        <div className="container" id="studyrooms-text">
            <div id="studyrooms-title">
                <h3>Room 3 - University Students<br/><small style={{fontSize: '14pt'}}>Powered by Agora.io</small></h3>
            </div>
            <div id="studyrooms-description">
                <p>Welcome To Our University Students' Room 3!<br/>Always Be Respectful Towards Each Other.<br/>Remember You Will Achieve More Together.<br/>Join The Oasis Student Community.</p>
            </div>
        </div>
        <h4>Local video</h4>
        <div id="me"></div>
        <h4>Remote video</h4>
        <div id="remote-container"></div>

        <hr></hr>
    </div>
);
}

export default Universityroom3