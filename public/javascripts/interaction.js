







(() => {

    var socket = new WebSocket(Setup.WEB_SOCKET_URL);
    //TODO process and send JSONs
    socket.onmessage = (event) => {
        let incomingMsg = JSON.parse(event.data);
        console.log(incomingMsg.data);
    }

})();