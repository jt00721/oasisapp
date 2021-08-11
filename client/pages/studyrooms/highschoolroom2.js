import React, { Component } from "react";

import dynamic from "next/dynamic";

const Live = dynamic(
  () => {
    return import("../../components/call1");
  },
  { ssr: false }
);

class Highschoolroom2 extends Component {
    constructor(props) {
        super(props);
        // if (typeof window === 'undefined') {
        //     global.window = {}
        // }
        this.state = {
          channel: "room2"
        };
      }
    
      selectChannel = channel => {
        this.setState({ channel });
      };
    
      render() {
        return (
          <div className="App">
              <div className="container" id="studyrooms-text">
                <div id="studyrooms-title">
                    <h3>Room 2 - Highschool Students<br/><small style={{fontSize: '14pt'}}>Powered by Agora.io</small></h3>
                </div>
                <div id="studyrooms-description">
                    <p>Welcome To Our High School Students' Room 2!<br/>Always Be Respectful Towards Each Other.<br/>Remember You Will Achieve More Together.<br/>Join The Oasis Student Community.</p>
                </div>
              </div>
            <Live channel={this.state.channel} />
          </div>
        );
      }
}

export default Highschoolroom2