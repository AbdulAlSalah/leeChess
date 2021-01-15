







(() => {

    var socket = new WebSocket(Setup.WEB_SOCKET_URL);
    //TODO process and send JSONs
    socket.onmessage = (event) => {
        //TODO messages are sent here from the server
        
        let incomingMsg = JSON.parse(event.data);
        console.log(incomingMsg.data);
    }

})();