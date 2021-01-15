(function(exports) {
    /*
     * Client to server: game is complete, the winner is ...
     */
    exports.T_GAME_WON_BY = "GAME-WON-BY";
    exports.O_GAME_WON_BY = {
      type: exports.T_GAME_WON_BY,
      data: null
    };
  
    /*
     * Server to client: abort game (e.g. if second player exited the game)
     */
    exports.O_GAME_ABORTED = {
      type: "GAME-ABORTED"
    };
    exports.S_GAME_ABORTED = JSON.stringify(exports.O_GAME_ABORTED);


    /*
    * Player to server: choose a piece which´s possible moves we want to se
    */
    exports.T_CHOOSE_PIECE = 'CHOOSE_PIECE'
    exports.O_CHOOSE_PIECE = {
        type: exports.T_CHOOSE_PIECE,
        data: null
    };
    //exports.S_MAKE_MOVE does not exist, as data needs to be set
    // data contains availible moves for a specific piece
  
    /*
     * Server to client: set as player white
     */
    exports.T_PLAYER_TYPE = "PLAYER-TYPE";
    exports.O_PLAYER_WHITE = {
      type: exports.T_PLAYER_TYPE,
      data: "WHITE"
    };
    exports.S_PLAYER_WHITE = JSON.stringify(exports.O_PLAYER_WHITE);
  
    /*
     * Server to client: set as player black
     */
    exports.O_PLAYER_BLACK = {
      type: exports.T_PLAYER_TYPE,
      data: "BLACK"
    };
    exports.S_PLAYER_BLACK = JSON.stringify(exports.O_PLAYER_BLACK);
  

  
    /*
     * Player white or black to server OR server to Player white or black: accomplish move
     */
    exports.T_MAKE_MOVE = "MAKE-A-MOVE";
    exports.O_MAKE_MOVE = {
      type: exports.O_MAKE_MOVE,
      data: null
    };
    //exports.S_MAKE_MOVE does not exist, as data needs to be set
    // data contains player (white/black) and move
  
    /*
     * Server to Player white & black: game over with result won/loss
     */
    exports.T_GAME_OVER = "GAME-OVER";
    exports.O_GAME_OVER = {
      type: exports.T_GAME_OVER,
      data: null
    };
  })(typeof exports === "undefined" ? (this.Messages = {}) : exports);
  //if exports is undefined, we are on the client; else the server