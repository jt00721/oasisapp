import React, { Component } from "react";
import ChannelForm from "../../components/channel-form";
// import Live from "../../components/call";

import useScript from '../../hooks/use-script';

import dynamic from "next/dynamic";

const Live = dynamic(
  () => {
    return import("../../components/call");
  },
  { ssr: false }
);

// const Highschoolroom1 = props => {
//     useScript('/js/AgoraRTCSDK-3.6.3.js')
//     useScript('/js/oasis.highschoolroom1.js');


//   // rest of your component
//   return (
//     <div>
//         <div className="container" id="studyrooms-text">
//             <div id="studyrooms-title">
//                 <h3>Room 1 - Highschool Students<br/><small style={{fontSize: '14pt'}}>Powered by Agora.io</small></h3>
//             </div>
//             <div id="studyrooms-description">
//                 <p>Welcome To Our High School Students' Room 1!<br/>Always Be Respectful Towards Each Other.<br/>Remember You Will Achieve More Together.<br/>Join The Oasis Student Community.</p>
//             </div>
//         </div>
//         <h4>Local video</h4>
//         <div id="me"></div>
//         <h4>Remote video</h4>
//         <div id="remote-container"></div>

//         <hr></hr>
//     </div>
    
//     );
// }

// export default Highschoolroom1

class Highschoolroom1 extends Component {
    constructor(props) {
        super(props);
        // if (typeof window === 'undefined') {
        //     global.window = {}
        // }
        this.state = {
          channel: ""
        };
      }
    
      selectChannel = channel => {
        this.setState({ channel });
      };
    
      render() {
        return (
          <div className="App">
            <ChannelForm selectChannel={this.selectChannel} />
            <Live channel={this.state.channel} />
          </div>
        );
      }
}

export default Highschoolroom1