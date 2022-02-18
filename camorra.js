
const BaseBot = require("./baseBot");

class Camorra extends BaseBot {
    constructor() {
        super();
        this.gameHistory = [];

        this.behaveiour = -1;
    }


    play() {
        if (this.behaveiour === -1) {
            return Math.floor(Math.random() * (2 - 0) + 0);
        } else {
            return this.behaveiour;
        }
    }


    newGame() {
        this.gameHistory=[]
        this.behaveiour = -1
    }

    newGeneration() {
        super.newGeneration();
        this.gameHistory = [];
        this.behaveiour = -1
    }


    memorize(number) {

        

        this.gameHistory.push(number);
        if (this.gameHistory.length >= 15) {
            let cooperativeHistory=this.gameHistory.filter(v => v === 1);
            let badHistory=this.gameHistory.filter(v => v === 0);
            if (badHistory.length > cooperativeHistory.length) {
                return this.behaveiour = 0;
            } else if (badHistory.length < cooperativeHistory.length) {
                return this.behaveiour = 1;
            } else {
                return this.behaveiour = -1;
            }

        }

        

    }

}


module.exports = Camorra