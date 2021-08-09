import React from 'react';

function Pomodoro() {
        return (
            <div>
                <h1>Pomodro ⏲ with 🛎</h1>

                <figure className="clock">
                    <div className="mins">0</div>
                    <div>:</div>
                    <div className="secs">00</div>
                    <audio
                        src="http://soundbible.com/mp3/service-bell_daniel_simion.mp3"
                    ></audio>
                    <svg className="progress-ring" height="120" width="120">
                        <circle
                        className="progress-ring__circle"
                        stroke-width="8"
                        fill="transparent"
                        r="50"
                        cx="60"
                        cy="60"
                        />
                    </svg>
                </figure>

                <div className="btn-group">
                    <button className="start">start focus</button>
                    <button className="reset">reset</button>
                    <button className="pause">pause</button>
                </div>

                <form action=".">
                    <label for="focusTime">Focus Time</label>
                    <input type="number" value="1" id="focusTime" />
                    <label for="breakTime">Break Time</label>
                    <input type="number" value="1" id="breakTime" />
                    <button type="submit">Save settings</button>
                </form>

                <hr></hr>
            </div>
        );
}

export default Pomodoro