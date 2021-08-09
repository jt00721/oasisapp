// Handle errors.
let handleError = function(err){
    console.log("Error: ", err);
};

// Query the container to which the remote stream belong.
let remoteContainer = document.getElementById("remote-container");

// Add video streams to the container.
function addVideoStream(elementId){
    // Creates a new div for every stream
    let streamDiv = document.createElement("div");
    // Assigns the elementId to the div.
    streamDiv.id = elementId;
    // Takes care of the lateral inversion
    streamDiv.style.transform = "rotateY(180deg)";
    // Adds the div to the container.
    remoteContainer.appendChild(streamDiv);
};

// Remove the video stream from the container.
function removeVideoStream(elementId) {
    let remoteDiv = document.getElementById(elementId);
    if (remoteDiv) remoteDiv.parentNode.removeChild(remoteDiv);
};

let client = AgoraRTC.createClient({
    mode: "rtc",
    codec: "vp8",
});

client.init("5d553233f7984f4a90a35f14e7387cf0", function() {
    console.log("client initialized");
}, function(err) {
    console.log("client init failed ", err);
});

// Join a channel
client.join("0065d553233f7984f4a90a35f14e7387cf0IAD7EfD5KbP4FFeALkVUfwYElyG3hRY5+2aRM3BHmmEw7AZbfQoAAAAAEABYI5phQlgMYQEAAQBCWAxh", "room3", null, (uid)=>{
    // Create a local stream
    let localStream = AgoraRTC.createStream({
        audio: true,
        video: true,
    });
    // Initialize the local stream
    localStream.init(()=>{
        // Play the local stream
        localStream.play("me");
        // Publish the local stream
        client.publish(localStream, handleError);
    }, handleError);
  }, handleError);

  // Subscribe to the remote stream when it is published
client.on("stream-added", function(evt){
    client.subscribe(evt.stream, handleError);
});
// Play the remote stream when it is subsribed
client.on("stream-subscribed", function(evt){
    let stream = evt.stream;
    let streamId = String(stream.getId());
    addVideoStream(streamId);
    stream.play(streamId);
});

// Remove the corresponding view when a remote user unpublishes.
client.on("stream-removed", function(evt){
    let stream = evt.stream;
    let streamId = String(stream.getId());
    stream.close();
    removeVideoStream(streamId);
});
// Remove the corresponding view when a remote user leaves the channel.
client.on("peer-leave", function(evt){
    let stream = evt.stream;
    let streamId = String(stream.getId());
    stream.close();
    removeVideoStream(streamId);
});