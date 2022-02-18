const BaseBot = require("./baseBot.js");

class StrangeBot extends BaseBot{

    constructor(){
        super();
    }

    newGeneration(){
        super.newGeneration();
    }

    play(){
        return 0;
    }
}

module.exports = StrangeBot;