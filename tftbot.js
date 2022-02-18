const BaseBot = require("./baseBot.js");

class TFTBadBot extends BaseBot{

    constructor(){
        super();
        this.lastMove = 0;
    }

    newGame(){
        this.lastMove = 0
    }

    newGeneration(){
        super.newGeneration();
        this.lastMove = 0
    }

    memorize(number){
        this.lastMove = number;
    }

    play(){
        return this.lastMove;
    }
}

class TFTGoodBot extends BaseBot{

    constructor(){
        super();
        this.lastMove = 1;
    }

    newGeneration(){
        super.newGeneration();
        this.lastMove = 1;
    }

    newGame(){
        this.lastMove = 1;
    }

    memorize(number){
        this.lastMove = number;
    }

    play(){
        return this.lastMove;
    }
}

module.exports = {TFTBadBot, TFTGoodBot};